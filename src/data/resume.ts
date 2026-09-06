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
  logo?: string;
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

/** A skill with a proficiency bar, matching the zandler.com.br design. */
export interface SkillBar {
  label: string;
  level: number; // 0-100
  letter: string; // single glyph badge
  color: string; // hex color for badge + bar
}

export interface SkillBars {
  title: string;
  skills: SkillBar[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
  linkLabel: string;
}

export const experience: Experience[] = [
  {
    role: 'DevRel | Platform Engineer',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    logo: '/svgs/bmg.png',
    start: 'Jan 2024',
    end: 'Present',
    current: true,
    summary: 'Focuses on optimizing the dev`s interaction with tools, processes, and platforms used in software development.',
    bullets: [
      'Optimizing the developer interaction with tools, processes, and platforms.',
      'Improving developer experience across internal platforms and tooling.',
      'Collaborating with engineering teams to adopt best practices and platform standards.',
    ],
    badges: ['Platform Engineering', 'DevRel', 'Developer Experience'],
  },
  {
    role: 'Solutions Architect',
    company: 'BMG Bank',
    location: 'Belo Horizonte, BR',
    logo: '/svgs/bmg.png',
    start: 'Feb 2023',
    end: 'Apr 2024',
    summary: 'Help to create architecture reference for programming language (backend and frontend), frameworks, Infrastructure.',
    bullets: [
      'Designed architecture standards for backend and frontend technologies.',
      'Established reference frameworks and infrastructure patterns.',
      'Led technical decision-making across multiple product teams.',
    ],
    badges: ['Architecture', 'Cloud', 'Microservices'],
  },
  {
    role: 'Senior SRE',
    company: 'BTG Bank',
    location: 'São Paulo, BR',
    logo: '/svgs/btg-pactual.png',
    start: 'Sep 2021',
    end: 'Dec 2023',
    summary: 'I designed and managed Kubernetes clusters, collaborated with software engineering teams to integrate microservices architecture, and developed monitoring and logging solutions with Prometheus and Grafana.',
    bullets: [
      'Designed and managed Kubernetes clusters for production workloads.',
      'Collaborated with software engineering teams to integrate microservices architecture.',
      'Developed comprehensive monitoring and logging solutions with Prometheus and Grafana.',
    ],
    badges: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE'],
  },
  {
    role: 'Tech Lead SRE Team',
    company: 'Semear Bank',
    location: 'Belo Horizonte, BR',
    logo: '/svgs/banco_semear_logo.jpeg',
    start: 'Jul 2020',
    end: 'Jul 2021',
    summary: 'I led the migration from a local data center to AWS, overseeing the entire infrastructure transition. By implementing FinOps principles and establishing security guardrails, we optimized resource usage and costs, achieving a 30% reduction in overall infrastructure expenses.',
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
    logo: '/svgs/bmg.png',
    start: 'Aug 2019',
    end: 'Jun 2020',
    summary: 'Start transitions from infra to Cloud with a fresh team. Training SRE package (docker, python, Cloud (AWS)).',
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
    logo: '/svgs/squadradigital_logo.jpeg',
    start: 'May 2017',
    end: 'Jul 2019',
    summary: 'Deploy and manage Openstack private Cloud.',
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

/** Practical skills rendered as proficiency bars (from zandler.com.br). */
export const skillBars: SkillBars[] = [
  {
    title: 'SRE',
    skills: [
      { label: 'Go', level: 32, letter: 'G', color: '#61DAFB' },
      { label: 'Python', level: 49, letter: 'P', color: '#4FC08D' },
      { label: 'Terraform', level: 84, letter: 'T', color: '#3178C6' },
      { label: 'Ansible', level: 72, letter: 'A', color: '#F7DF1E' },
      { label: 'AWS, GCP, OCI, Azure', level: 73, letter: 'C', color: '#E34F26' },
      { label: 'CI/CD', level: 91, letter: 'C', color: '#1572B6' },
    ],
  },
  {
    title: 'Culture and Process',
    skills: [
      { label: 'Agile', level: 87, letter: 'A', color: '#000000' },
      { label: 'Scrum', level: 94, letter: 'S', color: '#00DC82' },
      { label: 'Leadership', level: 89, letter: 'L', color: '#06B6D4' },
      { label: 'Speaker', level: 100, letter: 'S', color: '#BC52EE' },
      { label: 'Tech Lead', level: 73, letter: 'T', color: '#764ABC' },
      { label: 'Communication', level: 92, letter: 'C', color: '#E10098' },
    ],
  },
  {
    title: 'DevOps Tools',
    skills: [
      { label: 'Git', level: 62, letter: 'G', color: '#F05032' },
      { label: 'Docker', level: 80, letter: 'D', color: '#2496ED' },
      { label: 'Kubernetes', level: 65, letter: 'K', color: '#C21325' },
      { label: 'Yaml (yes, i know)', level: 61, letter: 'Y', color: '#8DD6F9' },
      { label: 'Database', level: 77, letter: 'D', color: '#646CFF' },
      { label: 'Monitoring', level: 82, letter: 'M', color: '#339933' },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'SRE',
    skills: ['Go', 'Python', 'Terraform', 'Ansible', 'AWS', 'GCP', 'OCI', 'Azure', 'CI/CD'],
  },
  {
    title: 'Culture and Process',
    skills: ['Agile', 'Scrum', 'Leadership', 'Speaker', 'Tech Lead', 'Communication'],
  },
  {
    title: 'DevOps Tools',
    skills: ['Git', 'Docker', 'Kubernetes', 'Yaml', 'Database', 'Monitoring'],
  },
];

export const projects: Project[] = [
  {
    title: 'DC local -> AWS',
    description: "Leadership in the migration of a bank's production environment.",
    image: '/img/projects/laptop.jpg',
    imageAlt: 'DC local -> AWS',
    url: 'https://bancosemear.com.br',
    tags: ['AWS', 'TechLead', 'Manager', 'Iac'],
    linkLabel: 'Conhecer projeto',
  },
  {
    title: 'Reduce 40% cost in AWs with finops',
    description: 'Start a',
    image: '/img/projects/costs.jpg',
    imageAlt: 'Reduce 40% cost in AWs with finops',
    url: 'https://aws.com',
    tags: ['finops', 'aws', 'leadership', 'costs'],
    linkLabel: 'Conhecer projeto',
  },
];

export const typingRoles = [
  'SRE / DevOps Engineer',
  'Platform Engineer',
  'Solutions Architect',
  'Cloud Enthusiast',
  'Public Speaker',
];

/** About section copy (from zandler.com.br). */
export const about = {
  eyebrowQuote: 'There and Back Again. - Baggins, Bilbo',
  heading: 'IT Solver',
  subheading: 'Trying to be a runner in spare time (5Km now)',
  paragraphs: [
    "Most part of my carrer was in fintech's and bank's.",
    'I have worked as an infrastructure analyst, devops (yes, i know), solutions architect, functional, DevXP, DevRel and I am currently publishing some SRE stuff.',
    'With over 15 years of experience, I have helped many companies improve their performance, sometimes with processes, sometimes with tools and always with culture.',
  ],
};
