module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
