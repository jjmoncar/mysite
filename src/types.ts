export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  caseStudy: {
    client: string;
    challenge: string;
    outcome: string;
  };
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  techStack: string[];
  image: string;
  stats: { label: string; value: string }[];
}

export interface SystemDiagnostic {
  latency: number;
  cpuLoad: number;
  memoryUsage: string;
  activeThreads: number;
  uptime: string;
  aiModelStatus: string;
  nodeRegion: string;
}
