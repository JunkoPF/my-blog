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
}

const Archive = ({ data, pageContext }: Props) => {
    const { edges } = data.allMarkdownRemark;

    const {
        hasNextPage,
        hasPrevPage,
        prevPagePath,
        nextPagePath,
    } = pageContext;

    console.log(pageContext);

    return (
        <Layout>
            <Page>
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
    query Archive($postLimit: Int!,$postOffset: Int!) {
        allMarkdownRemark(
            limit: $postLimit,
            skip: $postOffset,
            sort: {order: DESC, fields: frontmatter___date}
        ) {    
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
                    }
                }
            }
        }
    }
`

export default Archive;