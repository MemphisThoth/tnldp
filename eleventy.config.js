module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: 'src',
            includes: '_templates',
            data: '_data',
            output: '_site'
        }
    }
}