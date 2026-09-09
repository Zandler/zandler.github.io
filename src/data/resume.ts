export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'SSite Reliability Engineer (SRE) – Production Support & Service Operations',
    company: 'Aubay Portugal at Bcp Bank',
    location: 'Vila Nova de Poiares, PT',
    start: '2026',
    end: 'Present',
    current: true,
    summary: 'Support teams and services at BCP Millennium',
    bullets: [
      'Responsible for the reliability, availability, and operational support of critical banking services and production environments.',
      'Monitor, troubleshoot, and resolve production incidents, ensuring service continuity and adherence to SLAs.',
      'Work with Kubernetes to support and operate containerized applications and production workloads.',
      'Use Terraform and Terragrunt to automate and manage infrastructure as code across environments.',
      'Develop and maintain automation and internal tooling using Golang to improve operational efficiency and reduce manual processes.',
      'Investigate incidents and perform root cause analysis, implementing corrective and preventive actions.',
      'Collaborate with development, infrastructure, and platform teams to improve system reliability, observability, and operational processes.',
      'Contribute to infrastructure automation, deployment processes, and continuous improvement of production services.',
      'Participate in incident, problem, and change management activities within a critical banking environment.',
    ],
    badges: ['SRE', 'Developer Experience'],
  },
  {
    role: 'DevRel | Platform Engineer',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Jan 2024',
    end: 'Present',
    current: true,
    summary: 'Optimizing how developers interact with tools, processes and platforms inside the bank.',
    bullets: [
      'Improving developer experience across internal platforms and tooling.',
      'Collaborating with engineering teams to adopt platform standards.',
      'Connecting platform engineering, architecture and developer culture.',
    ],
    badges: ['Platform Engineering', 'DevRel', 'Developer Experience'],
  },
  {
    role: 'Solutions Architect',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Feb 2023',
    end: 'Apr 2024',
    summary: 'Architecture references for languages, frameworks and infrastructure.',
    bullets: [
      'Designed architecture standards for backend and frontend technologies.',
      'Established reference frameworks and infrastructure patterns.',
      'Led technical decision-making across product teams.',
    ],
    badges: ['Architecture', 'Cloud', 'Microservices'],
  },
  {
    role: 'Senior SRE',
    company: 'BTG Bank',
    location: 'São Paulo, BR',
    start: 'Sep 2021',
    end: 'Dec 2023',
    summary: 'Kubernetes, microservices integration, monitoring and logging at scale.',
    bullets: [
      'Designed and managed Kubernetes clusters for production workloads.',
      'Collaborated on microservices architecture and delivery pipelines.',
      'Built monitoring and logging with Prometheus and Grafana.',
    ],
    badges: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE'],
  },
  {
    role: 'Tech Lead SRE Team',
    company: 'Semear Bank',
    location: 'Belo Horizonte, BR',
    start: 'Jul 2020',
    end: 'Jul 2021',
    summary: 'Led the data-center-to-AWS migration and embedded FinOps in the operating model.',
    bullets: [
      'Led the migration from a local data center to AWS.',
      'Implemented FinOps principles and security guardrails.',
      'Achieved a 30% reduction in infrastructure expenses.',
    ],
    badges: ['AWS', 'FinOps', 'Migration', 'Security'],
  },
  {
    role: 'SRE / DevOps Engineer Tech Lead',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Aug 2019',
    end: 'Jun 2020',
    summary: 'Started the infrastructure-to-cloud transition with a fresh team.',
    bullets: [
      'Initiated infrastructure-to-cloud transition with a new team.',
      'Designed an SRE training program covering Docker, Python and AWS.',
      'Established DevOps practices and CI/CD pipelines.',
    ],
    badges: ['Docker', 'Kubernetes', 'Golang', 'AWS', 'CI/CD'],
  },
  {
    role: 'SRE / Solutions Architect',
    company: 'Squadra Digital',
    location: 'Belo Horizonte, BR',
    start: 'May 2017',
    end: 'Jul 2019',
    summary: 'Private cloud and client infrastructure architecture.',
    bullets: [
      'Deployed and managed OpenStack private cloud environments.',
      'Architected infrastructure solutions for client projects.',
      'Provided technical leadership on cloud-native strategies.',
    ],
    badges: ['OpenStack', 'Private Cloud', 'Architecture'],
  },
];

export const education: Education[] = [
  {
    degree: 'B.S.',
    field: 'Information Technology',
    school: 'Faculdade UNINTER',
    start: '2012',
    end: '2016',
  },
];

export const projects: Project[] = [
  {
    title: 'DC → AWS migration',
    description: "Leadership in the migration of a bank's production environment.",
    url: 'https://bancosemear.com.br',
    tags: ['AWS', 'TechLead', 'IaC'],
  },
  {
    title: 'FinOps cost reduction',
    description: 'Reduced infrastructure spend through FinOps and guardrails.',
    url: 'https://aws.com',
    tags: ['FinOps', 'AWS', 'Costs'],
  },
];