'use strict'

const path = require('path');
const _ = require('lodash');

const createTagsList = async ({ graphql, actions }) => {
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

    _.forEach(result.data.allMarkdownRemark.group, (tag) => {
        const tagSlug = `/tag/${_.kebabCase(tag.fieldValue)}`;

        createPage({
            path: tagSlug,
            component: path.resolve('./src/templates/tag.js'),
            context: {
                tag: tag.fieldValue,
            }
        });
    });
}

module.exports = createTagsList;