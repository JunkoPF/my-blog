// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Feed from '../components/Feed';
import { graphql } from 'gatsby';
import type { AllMarkdownRemark } from '../types';

type Props = {
    data: AllMarkdownRemark,
}

const HomePage = ({ data }: Props) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Layout>
            <Page>
                <Feed edges={edges} isIndex />
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
                        date(formatString: "YYYY/MM/DD")
                        category
                        description
                    }
                }
            }
        }
    }
`

export default HomePage;