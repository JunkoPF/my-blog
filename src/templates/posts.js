import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Page>
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            
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