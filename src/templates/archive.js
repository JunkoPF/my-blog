// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import { graphql } from 'gatsby';
import type { AllMarkdownRemark } from '../types';

type Props = {
    data: AllMarkdownRemark,
}

const Archive = ({ data }: Props) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Layout>
            <Page>
                <Feed edges={edges} />
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
                    }
                }
            }
        }
    }
`

export default Archive;