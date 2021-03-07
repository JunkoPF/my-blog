// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';

import { graphql } from 'gatsby';
import type { AllMarkdownRemark } from '../types';

type Props = {
    data: AllMarkdownRemark,
    pageContext: { tag: String }
}

const Tag = ({ data, pageContext }: Props) => {
    const { edges } = data.allMarkdownRemark;
    const { tag } = pageContext;
    return (
        <Layout>
            <Page>
            <h3>Tag: {tag}</h3>
            <Feed edges={edges} />
            </Page>
        </Layout>
    )
}

export const query = graphql`
    query($tag: String) {
        allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
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

export default Tag;