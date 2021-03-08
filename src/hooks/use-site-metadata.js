// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query MyQuery {
                site(siteMetadata: {}) {
                    siteMetadata {
                        title
                        subtitle
                        description
                        author {
                            name
                            photo
                            intro
                        }
                    }
                }
            }
        `
    )
    return site.siteMetadata;
};

export default useSiteMetadata;