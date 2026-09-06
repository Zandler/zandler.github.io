/** Social links shown in the footer and on /sobre.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?:
    | 'github'
    | 'linkedin'
    | 'instagram'
    | 'email'
    | 'rss'
    | 'download'
    | 'arrow-right'
    | 'arrow-left'
    | 'sun'
    | 'moon'
    | 'youtube'
    | 'phone'
    | 'location';
}

export const site = {
  title: 'Zandler Oliveira',
  shortTitle: 'zandler',
  description:
    'Essays on design systems and systems architecture — written by hand, in English and Brazilian Portuguese.',
  url: 'https://zandler.com.br',
  author: {
    name: 'Zandler Oliveira',
    role: 'SRE / DevOps · Systems Architect',
    email: 'falecom@zandler.com.br',
    location: 'Belo Horizonte, Brazil',
    resume: '/cv.pdf',
    resumeLabel: 'Download CV',
  },
  socials: {
    email: { url: 'mailto:falecom@zandler.com.br', label: 'Email', icon: 'email' },
    github: { url: 'https://github.com/zandler', label: 'GitHub', icon: 'github' },
    linkedin: { url: 'https://www.linkedin.com/in/zandler-oliveira/', label: 'LinkedIn', icon: 'linkedin' },
    rss: { url: '/rss.xml', label: 'RSS', icon: 'rss' },
  } satisfies Record<string, SocialLink>,
};

export type SocialKey = keyof typeof site.socials;

export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) return path;
  if (path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};