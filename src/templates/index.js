// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Homepage from '../components/Homepage'
import { graphql } from 'gatsby';
import type { AllMarkdownRemark } from '../types';

type Props = {
    data: AllMarkdownRemark,
}

const Home = ({ data }: Props) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Layout>
            <Page isIndex>
                <Homepage edges={edges} />
            </Page>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
                        category
                        tags
                        description
                        socialImage
                    }
                }
            }
        }
    }
`

export default Home;