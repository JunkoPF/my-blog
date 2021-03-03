// @flow strict
import React from 'react';
import Layout from '../components/Layout';
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
            <Feed edges={edges} isIndex/>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                        category
                        description
                    }
                }
            }
        }
    }
`

export default HomePage;