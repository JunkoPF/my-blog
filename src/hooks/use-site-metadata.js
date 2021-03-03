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
                    author
                }
                }
            }
        `
    )
    return site.siteMetadata;
};

export default useSiteMetadata;