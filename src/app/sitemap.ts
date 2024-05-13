import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://infotecdevs.com.br",
      lastModified: new Date(),
      //   changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://infotecdevs.com.br/contact",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://infotecdevs.com.br/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://infotecdevs.com.br/works",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
