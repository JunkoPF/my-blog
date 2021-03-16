'use strict'

const path = require('path');

const createPostsPages = require('./pagination/create-posts-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');

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
    });

    await createPostsPages({ graphql, actions });
    await createTagsPages({ graphql, actions });
}

module.exports = createPages;
