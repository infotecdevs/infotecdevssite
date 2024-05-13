import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/*"],
    },
    sitemap: "infotecdevs.com.br/sitemap.xml",
  };
}
