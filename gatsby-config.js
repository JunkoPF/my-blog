/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: "Jamarcus's Blog",
        subtitle: "coming soon...",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum sit delectus in omnis doloremque laboriosam provident reiciendis. Rerum, facere?",
        author: {
            name: "Polyethylene",
            photo: "photo.jpg",
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde dolores fuga aliquam similique cum ea non tempora quo ducimus?",
        }

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
