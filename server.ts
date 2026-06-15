import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

// Setup server environment
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log loaded environment variables (safely masking password)
console.log("[SERVER] Starting server with environmental variables loaded.");
console.log(`[SERVER] SMTP_USER config: ${process.env.SMTP_USER || "Not configured"}`);
console.log(`[SERVER] RECEIVER_EMAIL config: ${process.env.RECEIVER_EMAIL || "Not configured"}`);
console.log(`[SERVER] SMTP_PASS defined: ${!!process.env.SMTP_PASS}`);

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(`[SERVER] Received /api/contact request from: ${name} (${email})`);

  if (!name || !email || !message) {
    console.log("[SERVER] Missing fields in request body.");
    return res.status(400).json({
      success: false,
      error: "Todos los campos (nombre, correo, mensaje) son requeridos."
    });
  }

  // 1. Try SMTP / Nodemailer if configured
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false"; // Default to true (SSL)
  const receiverEmail = process.env.RECEIVER_EMAIL || "jjmc081970@gmail.com";

  if (smtpUser && smtpPass) {
    console.log(`[SERVER] Attempting SMTP delivery via host: ${smtpHost}:${smtpPort} as ${smtpUser}...`);
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      } as any);

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`, // Sender is the SMTP auth user to avoid spam filters
        replyTo: email, // Direct reply to the user's submitted email
        to: receiverEmail,
        subject: `Nuevo mensaje de contacto de ${name} (JJSERVICES)`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #ff5c00; border-bottom: 2px solid #ff5c00; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
            <p><strong>Nombre completo:</strong> ${name}</p>
            <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff5c00; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888;">Este mensaje fue enviado automáticamente desde el formulario de contacto de JJSERVICES.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("[SERVER] SMTP sent successfully!");
      return res.status(200).json({
        success: true,
        message: "Correo enviado existosamente usando Nodemailer SMTP."
      });
    } catch (err: any) {
      console.error("[SERVER] Nodemailer SMTP transmission error:", err);
      
      const errorMessage = err.message || "";
      let userFriendlyError = `Error al enviar correo por SMTP: ${errorMessage}`;

      if (errorMessage.includes("535") || errorMessage.includes("Username and Password not accepted") || errorMessage.includes("BadCredentials")) {
        userFriendlyError = "Error de autenticación de Gmail. " +
          "Google requiere que utilices una 'Contraseña de Aplicación' (App Password) de 16 dígitos en lugar de tu contraseña normal del correo. " +
          "Sigue estos pasos rápidos: 1. Ve a tu cuenta de Google (myaccount.google.com) -> Seguridad, 2. Activa la Verificación en 2 pasos si no está activa, 3. Busca 'Contraseñas de aplicación' y genera una nueva para esta aplicación, 4. Reemplaza tu SMTP_PASS en el archivo .env con esa clave de 16 letras sin espacios. " +
          "¡O bien, usa Web3Forms abajo!";
      }

      // If Web3Forms is configured, let's try to automatically fall back to it rather than failing!
      const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
      if (web3formsKey && !web3formsKey.includes("YOUR")) {
        console.log("[SERVER] SMTP failed. Automatically falling back to Web3Forms...");
        try {
          const fbResponse = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              access_key: web3formsKey,
              name: name,
              email: email,
              message: message,
              subject: `Nuevo mensaje de contacto de ${name} (JJSERVICES)`
            })
          });

          const fbResult = await fbResponse.json();
          if (fbResult.success) {
            return res.status(200).json({
              success: true,
              message: "SMTP falló, pero tu correo se envió correctamente usando la alternativa de Web3Forms."
            });
          }
        } catch (fbErr: any) {
          console.error("[SERVER] Web3Forms fallback also failed:", fbErr);
        }
      }

      return res.status(500).json({
        success: false,
        error: userFriendlyError
      });
    }
  }

  // 2. Try Web3Forms if WEB3FORMS_ACCESS_KEY is configured
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3formsKey) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name,
          email: email,
          message: message,
          subject: `Nuevo mensaje de contacto de ${name} (JJSERVICES)`
        })
      });

      const result = await response.json();
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: "Correo enviado exitosamente usando Web3Forms."
        });
      } else {
        return res.status(500).json({
          success: false,
          error: `Error de Web3Forms: ${result.message || "Fallo inesperado"}`
        });
      }
    } catch (err: any) {
      console.error("Web3Forms submission error:", err);
      return res.status(500).json({
        success: false,
        error: `Error al enviar vía Web3Forms: ${err.message || err}`
      });
    }
  }

  // 3. Fallback: If no config is set, return a detailed instructions error message
  // so the user knows exactly how to complete the setup!
  return res.status(400).json({
    success: false,
    needsConfig: true,
    error: `Configuración de correo pendiente. Por favor, agregue su SMTP_USER y SMTP_PASS (o un WEB3FORMS_ACCESS_KEY para su correo jjmc081970@gmail.com) en los Secretos de AI Studio.`,
    debugData: { name, email, message }
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
