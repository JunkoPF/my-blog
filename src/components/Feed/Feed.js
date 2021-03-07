import React from 'react';
import { Link } from 'gatsby'
import styles from './Feed.module.scss';


const Feed = ({ edges, isIndex }: Props) => {
    return (
            <div className={styles['feed']}>
                {edges.map((edge) => (
                    <div className={styles['feed__content']}>
                        <Link to={edge.node.fields.slug}>
                            <h1 className={styles['feed__content__title']}>
                                {edge.node.frontmatter.title}
                            </h1>
                        </ Link>
                        {
                            isIndex ?(
                                <div className={styles['feed__content__info']}>
                                    <span>{edge.node.frontmatter.category}</span>
                                    <span>{edge.node.frontmatter.date}</span>
                                </div>
                            ):null
                        }
                        {
                            isIndex ?(
                                <div className={styles['feed__content__description']}>
                                    <p>{edge.node.frontmatter.description}</p>
                                </div>
                                ):null
                        }
                    </div>
                ))}
            </div>
        );
};

export default Feed;