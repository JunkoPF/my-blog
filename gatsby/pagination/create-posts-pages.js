'use strict'

const path = require('path');

const createPostsPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        allMarkdownRemark {
            totalCount
        }
    }
    `)

    const postsPerPage = 4;
    const pagesNum = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

    for (let index = 0; index < pagesNum; index += 1) {
        createPage({
            path: index === 0 ? `/archive` : `/archive/page/${index}`,
            component: path.resolve('./src/templates/archive.js'),
            context: {
                hasPrevPage: index !== 0,
                hasNextPage: index !== pagesNum - 1,
                prevPagePath: index <= 1 ? `/archive` : `/archive/page/${index - 1}`,
                nextPagePath: `/archive/page/${index + 1}`,
                postLimit: postsPerPage,
                postOffset: postsPerPage * index,
            }
        })
    }
}

module.exports = createPostsPages;