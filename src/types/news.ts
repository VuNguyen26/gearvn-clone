export type NewsArticle = {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt?: string;
  content?: string;
  category?: string;
  date: string;
  author: string;
  featured?: boolean;
};

export type NewsTopic = {
  name: string;
  href: string;
  icon?: string;
};

export type NewsBannerData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};