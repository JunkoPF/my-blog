'use strict'

const path = require('path');
const _ = require('lodash');

const createTagsPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
    `);

    const postsPerPage = 4;

    _.forEach(result.data.allMarkdownRemark.group, (tag) => {
        const tagSlug = `/tag/${_.kebabCase(tag.fieldValue)}`;
        const pagesNum = Math.ceil(tag.totalCount / postsPerPage);

        for (let index = 0; index < pagesNum; index += 1) {

            createPage({
                path: index === 0 ? tagSlug : `${tagSlug}/page/${index}`,
                component: path.resolve('./src/templates/tag.js'),
                context: {
                    tag: tag.fieldValue,
                    hasPrevPage: index !== 0,
                    hasNextPage: index !== pagesNum - 1,
                    prevPagePath: index <= 1 ? `${tagSlug}` : `${tagSlug}/page/${index - 1}`,
                    nextPagePath: `${tagSlug}/page/${index + 1}`,
                    postLimit: postsPerPage,
                    postOffset: postsPerPage * index,
                }
            });
        }
    });
}

module.exports = createTagsPages;