// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

import { graphql } from 'gatsby';
import type { AllMarkdownRemark } from '../types';

type Props = {
    data: AllMarkdownRemark,
    pageContext: { tag: String }
}

const Tag = ({ data, pageContext }: Props) => {
    const { edges } = data.allMarkdownRemark;
    const {
        tag,
        hasPrevPage,
        hasNextPage,
        prevPagePath,
        nextPagePath,
    } = pageContext;
    return (
        <Layout>
            <Page>
                <h3>Tag: {tag}</h3>
                <Feed edges={edges} />
                <Pagination
                    hasPrevPage={hasPrevPage}
                    hasNextPage={hasNextPage}
                    prevPagePath={prevPagePath}
                    nextPagePath={nextPagePath}
                />
            </Page>
        </Layout>
    )
}

export const query = graphql`
    query Tag($tag: String, $postLimit: Int!, $postOffset: Int!) {
        allMarkdownRemark(
            limit: $postLimit,
            skip: $postOffset,
            filter: {frontmatter: {tags: {in: [$tag]}}},
            sort: {order: DESC, fields: frontmatter___date}
        ) {
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