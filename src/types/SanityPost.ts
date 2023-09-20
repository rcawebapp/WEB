export interface PostSanity {
  id: string;
  title: string;
  titleSpanish: string;
  description: string;
  descriptionSpanish: string;
  category: string;
  favorited: boolean;
  createdAt: Date;
  duration: string;
  tags: string[];
  author: Author;
  content: string;
  contentSpanish: string;
  coverUrl: string;
  heroUrl: string;
}

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
  quotes: string;
  about: string;
}

interface Content {
  html: string;
}
