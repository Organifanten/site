import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import markdownIt from "markdown-it";
import * as esbuild from "esbuild";

const md = markdownIt({ html: true });

export default function (eleventyConfig) {
  eleventyConfig.addFilter("markdown", (content) => md.render(content));
  eleventyConfig.addFilter("bust", (url) => {
    const filePath = path.resolve("_site", url.replace(/^\//, ""));
    try {
      const content = fs.readFileSync(filePath);
      const hash = crypto
        .createHash("md5")
        .update(content)
        .digest("hex")
        .slice(0, 8);
      return `${url}?v=${hash}`;
    } catch {
      return url;
    }
  });
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.on("eleventy.after", async () => {
    await esbuild.build({
      entryPoints: ["_site/assets/consent.js", "_site/assets/level-toggle.js"],
      allowOverwrite: true,
      minify: true,
      outdir: "_site/assets",
    });
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
  };
}
