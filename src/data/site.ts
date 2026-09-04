/** A link shown in the hero and footer.
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
    | 'moon';
}

export const site = {
  title: 'Zandler Oliveira',
  shortTitle: 'zandler',
  description:
    'SRE / DevOps — bridging development and operations with over 15 years of experience in fintech and banking.',
  url: 'https://zandler.com.br',
  author: {
    name: 'Zandler Oliveira',
    email: 'zandler@zandler.com.br',
    location: 'Belo Horizonte, BR',
    resume: '/resume/Resume.pdf',
  },
  socials: {
    github: { url: 'https://github.com/zandler', label: 'GitHub', icon: 'github' },
    linkedin: { url: 'https://www.linkedin.com/in/zandler-oliveira/', label: 'LinkedIn', icon: 'linkedin' },
    email: { url: 'mailto:zandler@zandler.com.br', label: 'Email', icon: 'email' },
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
