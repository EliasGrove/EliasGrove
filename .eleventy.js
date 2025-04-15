const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a custom date filter using Luxon
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
