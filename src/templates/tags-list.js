import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import TagsList from '../components/TagsList';


const Tags = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
        <Layout>
            <Page>
                <TagsList tags={group} />
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