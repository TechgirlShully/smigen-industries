import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smigenindustries.com",
    },
    {
      url: "https://smigenindustries.com/about",
    },
    {
      url: "https://smigenindustries.com/services",
    },
    {
      url: "https://smigenindustries.com/gallery",
    },
    {
      url: "https://smigenindustries.com/contact",
    },
  ];
}