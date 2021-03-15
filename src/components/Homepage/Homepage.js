import React from 'react';
import { Link } from 'gatsby'
import styles from './Homepage.module.scss';
import _ from 'lodash';

const getTags = (tags, isLastest) => (
    <div className={styles[`homepage__${isLastest ? 'lastest' : 'previous'}__tags`]}>
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

const Homepage = ({ edges }: Props) => {
    if (edges.length === 0) {
        return null;
    } else {
        const lastestEdge = edges[0];
        const previousEdges = edges.slice(1);
        return (
            <div className={styles['homepage']}>
                <div className={styles['homepage__lastest']} >
                    <div className={styles['homepage__lastest__info']}>
                        <span>{lastestEdge.node.frontmatter.category}</span>
                        <span>/</span>
                        <span>{lastestEdge.node.frontmatter.date}</span>
                    </div>
                    <Link
                        className={styles['homepage__lastest__title']}
                        to={lastestEdge.node.fields.slug}
                    >
                        <h1>
                            {lastestEdge.node.frontmatter.title}
                        </h1>
                    </Link>
                    <Link
                        className={styles['homepage__lastest__socialImage']}
                        to={lastestEdge.node.fields.slug}
                    >
                        <img
                            src={lastestEdge.node.frontmatter.socialImage}
                            alt={lastestEdge.node.frontmatter.title}
                        />
                    </Link>
                    <p className={styles['homepage__lastest__description']}>
                        {lastestEdge.node.frontmatter.description}
                    </p>
                    {getTags(lastestEdge.node.frontmatter.tags, true)}
                </div>
                <div className={styles['splitLine']}></div>

                {
                    previousEdges.map((edge) => (
                        <div className={styles['homepage__previous']}>
                            <Link
                                className={styles['homepage__previous__socialImage']}
                                to={edge.node.fields.slug}
                            >
                                <img
                                    src={edge.node.frontmatter.socialImage}
                                    alt={edge.node.frontmatter.title}
                                />
                            </Link>
                            <div className={styles['homepage__previous__text']}>
                                <div className={styles['homepage__previous__info']}>
                                    <span>{edge.node.frontmatter.category}</span>
                                    <span>/</span>
                                    <span>{edge.node.frontmatter.date}</span>
                                </div>
                                <Link
                                    className={styles['homepage__previous__title']}
                                    to={edge.node.fields.slug}
                                >
                                    <h1>
                                        {edge.node.frontmatter.title}
                                    </h1>
                                </ Link>
                                <p className={styles['homepage__previous__description']}>
                                    {edge.node.frontmatter.description}
                                </p>
                                {getTags(edge.node.frontmatter.tags, false)}
                            </div>
                        </div>
                    ))
                }
                <Link to='/archive'>
                    <button className='magic-button'>
                        <span>全部文章</span>
                    </button>
                </Link>
            </div >
        );
    }

};

export default Homepage;