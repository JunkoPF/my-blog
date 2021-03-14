import React from 'react';
import { Link } from 'gatsby'
import styles from './Feed.module.scss';
import _ from 'lodash';

const getTags = (tags) => (
    <div className={styles['feed__tags']}>
        {
            (tags || []).map((tag) => (
                <span>
                    <Link to={`/tag/${_.kebabCase(tag)}`}>
                        #{tag}
                    </Link>
                </ span>
            ))
        }
    </div>
);

const Feed = ({ edges, isTagsList, isCatagoriesList }: Props) => {
    return (
        <div className={styles['feed']}>
            {
                (edges || []).map((edge) => (
                    <div className={styles['feed__content']}>
                        <Link
                            className={styles['feed__title']}
                            to={edge.node.fields.slug}
                        >
                            <h1>
                                {edge.node.frontmatter.title}
                            </h1>
                        </Link>
                        <div className={styles['feed__meta']}>
                            <div className={styles['feed__info']}>
                                <span>{edge.node.frontmatter.category}</span>
                                <span>/</span>
                                <span>{edge.node.frontmatter.date}</span>
                            </div>
                            {getTags(edge.node.frontmatter.tags)}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Feed;