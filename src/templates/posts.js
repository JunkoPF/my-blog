import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Article from '../components/Article';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Page>
                <Article
                    title={post.frontmatter.title}
                    html={post.html}
                />
            </Page>
        </Layout>
    )
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`