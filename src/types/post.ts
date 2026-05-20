export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}
