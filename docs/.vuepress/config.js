const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'theme/**/*.*',
    ]
});

module.exports = {
    title: "zheilbron.com",
    description: "The blog of Zachary Heilbron",

    markdown: {
        anchor: {
            permalink: false,
        },
    },
    postcss: {
        plugins: [
            require('autoprefixer'),
            require('tailwindcss')('./tailwind.config.js'),
        ]
    },
    plugins: [
        require('./extract-description.js'),
        ['@vuepress/search', {
            searchMaxSuggestions: 5,
        }]
    ],
}