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
    | 'moon'
    | 'youtube'
    | 'phone'
    | 'location';
}

export const site = {
  title: 'Zandler Oliveira',
  shortTitle: 'zandler',
  description:
    'SRE / DevOps — bridging development and operations with over 15 years of experience in fintech and banking.',
  url: 'https://zandler.com.br',
  author: {
    name: 'Zandler Oliveira',
    role: 'SRE / DevOps',
    email: 'falecom@zandler.com.br',
    whatsapp: '+55 31 97335-6840',
    whatsappUrl: 'https://wa.me/5531973356840',
    location: 'Belo Horizonte/MG - Brasil',
    resume: '/cv.pdf',
    resumeLabel: 'Download CV',
  },
  socials: {
    github: { url: 'https://github.com/zandler', label: 'GitHub', icon: 'github' },
    linkedin: { url: 'https://www.linkedin.com/in/zandler-oliveira/', label: 'LinkedIn', icon: 'linkedin' },
    youtube: { url: 'https://www.youtube.com/@zandler', label: 'YouTube', icon: 'youtube' },
    email: { url: 'mailto:falecom@zandler.com.br', label: 'Email', icon: 'email' },
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
