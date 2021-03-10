import React from 'react';
import { Link } from 'gatsby'
import styles from './Feed.module.scss';

const getTags = (tags, isLastest) => (
    <div className={styles[`feed__${isLastest ? 'lastest' : 'previous'}__tags`]}>
        {
            tags.map((tag) => (
                <span>#{tag}</ span>
            ))
        }
    </div>
);

const Feed = ({ edges, isIndex }: Props) => {
    if (edges.length === 0) {
        return null;
    } else {
        const lastestEdge = edges[0];
        const previousEdges = edges.slice(1);
        return (
            <div className={styles['feed']}>
                <div className={styles['feed__lastest']} >
                    <div className={styles['feed__lastest__info']}>
                        <span>{lastestEdge.node.frontmatter.category}</span>
                        <span>/</span>
                        <span>{lastestEdge.node.frontmatter.date}</span>
                    </div>
                    <Link
                        className={styles['feed__lastest__title']}
                        to={lastestEdge.node.fields.slug}
                    >
                        <h1>
                            {lastestEdge.node.frontmatter.title}
                        </h1>
                    </Link>
                    <Link
                        className={styles['feed__lastest__socialImage']}
                        to={lastestEdge.node.fields.slug}
                    >
                        <img
                            src={lastestEdge.node.frontmatter.socialImage}
                            alt={lastestEdge.node.frontmatter.title}
                        />
                    </Link>
                    <p className={styles['feed__lastest__description']}>
                        {lastestEdge.node.frontmatter.description}
                    </p>
                    {getTags(lastestEdge.node.frontmatter.tags, true)}
                </div>
                {
                    previousEdges.map((edge) => (
                        <div className={styles['feed__content']}>
                            <Link to={edge.node.fields.slug}>
                                <h1 className={isIndex ? styles['feed__content__title__index'] : styles['feed__content__title']}>
                                    {edge.node.frontmatter.title}
                                </h1>
                            </ Link>
                            {
                                isIndex ? (
                                    <div className={styles['feed__content__info']}>
                                        <span>{edge.node.frontmatter.category}</span>
                                        <span>{edge.node.frontmatter.date}</span>
                                    </div>
                                ) : null
                            }
                            {
                                isIndex ? (
                                    <p className={styles['feed__content__description']}>
                                        {edge.node.frontmatter.description}
                                    </p>
                                ) : null
                            }
                        </div>
                    ))
                }
            </div >
        );
    }

};

export default Feed;