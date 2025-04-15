// No need to require luxon unless you add the custom filter back later

module.exports = function(eleventyConfig) {

  // Copy the /css folder to the output /dist folder
  eleventyConfig.addPassthroughCopy("css");

  // Add a shortcode to get the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // --- Optional: Add back if you need complex date formatting later ---
  // const { DateTime } = require("luxon");
  // eleventyConfig.addFilter("formatPostDate", (dateObj, format = "MMMM d, yyyy") => {
  //   if (dateObj instanceof Date) {
  //        return DateTime.fromJSDate(dateObj).toFormat(format);
  //   }
  //   return dateObj;
  // });
  // ---------------------------------------------------------------------

  return {
    dir: {
      input: "src", // Source files are in /src
      includes: "_includes", // Layout files are in /src/_includes
      output: "dist" // Built site goes into /dist
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
