import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import kebabCase from 'lodash/kebabCase';

const Tags = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
    <Layout>
        <Page>
        {
            group.map((tagInfo) => (
                <div>
                    <Link to={`/tag/${kebabCase(tagInfo.tag)}/`}>
                        {tagInfo.tag} ({tagInfo.totalCount})
                    </Link>
                </div>
            ))
        }
        </Page>
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