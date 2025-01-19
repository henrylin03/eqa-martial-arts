import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const baseUrl = "https://equinoxacademy.com.au";

// Define your React Router routes
const pages = [
  "/",
  "/kids-classes",
  "/adults-classes",
  "/womens-classes",
  "/timetable",
  "/contact",
];

// Convert file URL to path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate XML content
const generateSitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("\n")}
</urlset>`;

// Write sitemap.xml to the public directory
const writeSitemap = async () => {
  try {
    const sitemapPath = path.join(__dirname, "../public/sitemap.xml"); // Adjust path for consistency
    await fs.writeFile(sitemapPath, generateSitemapXml(), "utf8");
    console.log(`✅ Sitemap successfully generated: ${sitemapPath}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
};

// Run the script
writeSitemap();
