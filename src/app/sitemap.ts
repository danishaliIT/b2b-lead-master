import { MetadataRoute } from 'next';

// 👇 Ye nayi line error khatam kar degi
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://b2bleadmaster.online',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}