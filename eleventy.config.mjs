import markdownIt from "markdown-it";

const md = markdownIt({ html: true });

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("md", (contents) => contents);
  eleventyConfig.addFilter("markdown", (content) => md.render(content));
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
  };
}
