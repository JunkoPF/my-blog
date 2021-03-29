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
            name: "聚乙烯",
            photo: "photo.jpg",
            intro: "什么叫我竟然直播了？我不直播我干嘛？啊？居然开播了是什么意思啊？这肯定开播呀。以后每天都来直播，一个月31天，每天都能见到我，兄弟们。",
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
