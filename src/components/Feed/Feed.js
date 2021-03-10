import React from 'react';
import { Link } from 'gatsby'
import styles from './Feed.module.scss';


const Feed = ({ edges, isIndex }: Props) => {
    if (edges.length === 0) {
        return null;
    } else {
        const lastestEdge = edges[0];
        const previousEdges = edges.slice(1);
        return (
            <div className={styles['feed']}>
                <div className={styles['feed__lastest']} >
                    <Link to={lastestEdge.node.fields.slug}>
                        <h1 className={styles['feed__lastest__title']}>
                            {lastestEdge.node.frontmatter.title}
                        </h1>
                        <img
                            className={styles['feed__lastest__socialImage']}
                            src={lastestEdge.node.frontmatter.socialImage}
                            alt={lastestEdge.node.frontmatter.title}
                        />
                    </Link>
                    <div className={styles['feed__lastest__info']}>
                        <span>{lastestEdge.node.frontmatter.category}</span>
                        <span>{lastestEdge.node.frontmatter.date}</span>
                    </div>
                    <p className={styles['feed__lastest__description']}>
                        {lastestEdge.node.frontmatter.description}
                    </p>
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