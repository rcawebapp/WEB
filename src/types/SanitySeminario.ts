export interface SeminarioSanity {
  id: string;
  languages: string[];
  scheduledtime?: string;
  enlace?: string;
  totalHours?: number;
  createdAt?: string;
  category: string;
  slug: string;
  slugSpanish: string;
  coverUrl: string;
  description?: string;
  descriptionSpanish?: string;
  price?: number;
  priceSale?: number;
  shareLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}
