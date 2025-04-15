module.exports = function(eleventyConfig) {
  // Copy the `/css` folder to the output `/dist` folder
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src", // Source files are in /src
      includes: "_includes", // Layout files are in /src/_includes
      output: "dist" // Built site goes into /dist
    },
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
    templateFormats: ["md", "njk", "html"] // Process these file types
  };
};
