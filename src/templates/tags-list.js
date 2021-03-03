import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'
import kebabCase from 'lodash/kebabCase'

const Tags = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
    <Layout>
        {
            group.map((tagInfo) => (
                <Link to={`/tag/${kebabCase(tagInfo.tag)}/`}>
                    {tagInfo.tag} ({tagInfo.totalCount})
                </Link>
            ))
        }
    </Layout>
);

export const query = graphql`
        query {
            allMarkdownRemark {
                group(field: frontmatter___tags) {
                    tag: fieldValue
                    totalCount
                }
            }
        }
`

export default Tags;