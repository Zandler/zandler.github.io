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

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    role: 'DevRel | Platform Engineer',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Jan 2024',
    end: 'Present',
    current: true,
    summary: 'Optimizing the developer interaction with tools, processes, and platforms used in software development.',
    bullets: [
      'Focused on improving developer experience across internal platforms and tooling.',
      'Building developer portals and documentation to streamline onboarding.',
      'Collaborating with engineering teams to adopt best practices and platform standards.',
    ],
    badges: ['Platform Engineering', 'DevRel', 'Developer Experience'],
  },
  {
    role: 'Solutions Architect',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Feb 2023',
    end: 'Dec 2024',
    summary: 'Creating architecture references for programming languages, frameworks, and infrastructure.',
    bullets: [
      'Designed architecture standards for backend and frontend technologies.',
      'Established reference frameworks and infrastructure patterns.',
      'Led technical decision-making across multiple product teams.',
    ],
    badges: ['Architecture', 'Cloud', 'Microservices'],
  },
  {
    role: 'Senior SRE',
    company: 'BTG Pactual',
    location: 'São Paulo, BR',
    start: 'Sep 2020',
    end: 'Dec 2023',
    summary: 'Designed and managed Kubernetes clusters, integrated microservices architecture, and built monitoring solutions.',
    bullets: [
      'Designed and managed Kubernetes clusters for production workloads.',
      'Collaborated with software engineering teams to integrate microservices architecture.',
      'Developed comprehensive monitoring and logging solutions with Prometheus and Grafana.',
    ],
    badges: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE'],
  },
  {
    role: 'Tech Lead SRE Team',
    company: 'Banco Semear',
    location: 'Belo Horizonte, BR',
    start: 'Jul 2020',
    end: 'Jul 2021',
    summary: 'Led migration from local data center to AWS, implementing FinOps and security guardrails.',
    bullets: [
      'Led the migration from a local data center to AWS, overseeing the entire infrastructure transition.',
      'Implemented FinOps principles and established security guardrails.',
      'Achieved a 30% reduction in overall infrastructure expenses.',
    ],
    badges: ['AWS', 'FinOps', 'Migration', 'Security'],
  },
  {
    role: 'SRE / DevOps Engineer Tech Lead',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    start: 'Aug 2019',
    end: 'Jun 2020',
    summary: 'Started cloud transition with a fresh team, training on Docker, Python, and AWS.',
    bullets: [
      'Initiated infrastructure-to-cloud transition with a newly formed team.',
      'Designed and delivered SRE training program covering Docker, Python, and AWS.',
      'Established DevOps practices and CI/CD pipelines.',
    ],
    badges: ['Docker', 'Python', 'AWS', 'CI/CD'],
  },
  {
    role: 'SRE / Solutions Architect',
    company: 'Squadra Digital',
    location: 'Belo Horizonte, BR',
    start: 'May 2017',
    end: 'Jul 2019',
    summary: 'Deployed and managed OpenStack private cloud infrastructure.',
    bullets: [
      'Deployed and managed OpenStack private cloud environments.',
      'Architected infrastructure solutions for client projects.',
      'Provided technical leadership on cloud-native strategies.',
    ],
    badges: ['OpenStack', 'Private Cloud', 'Architecture'],
  },
];

export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [];

export const education: Education[] = [
  {
    degree: 'B.S.',
    field: 'Computer Science',
    school: 'Universidade Federal de Minas Gerais',
    start: '2008',
    end: '2013',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'SRE & DevOps',
    skills: ['Terraform', 'Ansible', 'CI/CD', 'Prometheus', 'Grafana', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Azure', 'OCI', 'OpenStack', 'Linux', 'Networking'],
  },
  {
    title: 'Languages & Scripting',
    skills: ['Python', 'Go', 'Bash', 'YAML', 'HCL'],
  },
  {
    title: 'Culture & Process',
    skills: ['Agile', 'Scrum', 'Leadership', 'Tech Lead', 'Public Speaking', 'Communication'],
  },
];

export const typingRoles = [
  'SRE / DevOps Engineer',
  'Platform Engineer',
  'Solutions Architect',
  'Cloud Enthusiast',
  'Public Speaker',
];
