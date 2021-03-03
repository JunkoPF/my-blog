'use strict'

const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `posts` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

module.exports = onCreateNode;