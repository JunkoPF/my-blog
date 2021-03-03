'use strict'

const path = require('path');

const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // home
    createPage({
        path: '/',
        component: path.resolve('./src/templates/index.js'),
    })

    // about-me
    createPage({
        path: '/about',
        component: path.resolve('./src/templates/about.js'),
    });

    // archive
    createPage({
        path: '/archive',
        component: path.resolve('./src/templates/archive.js'),
    });

    // tags
    createPage({
        path: '/tags-list',
        component: path.resolve('./src/templates/tags-list.js'),
    });

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/posts.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}

module.exports = createPages;
