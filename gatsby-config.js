/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "polythylene's Blog",
        subtitle: "coming soon...",
        author: "polythylene",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/media`,
                name: 'media'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'css',
                path: `${__dirname}/static/css`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static`,
                name: 'assets'
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-flow`,
        `gatsby-plugin-sass`,
    ],
}
