const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    return {
        dir: {
            input: 'src',
            includes: '_templates',
            data: '_data',
            output: '_site'
        }
    }
}