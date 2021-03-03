// @flow strict
import React from 'react';
import { Link } from 'gatsby'
import type { Edges } from '../../types';
//import styles from './Feed.module.scss';

type Props = {
    edges: Edges,
    isIndex: Boolean
};

const Feed = ({ edges, isIndex }: Props) => {
    return (
            <div>
                {edges.map((edge) => (
                    <div>
                        <div>
                            <Link to={edge.node.fields.slug}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            </ Link>
                            {
                                isIndex ?(
                                    <div>
                                        <span>{edge.node.frontmatter.category}</span>
                                        <span>{edge.node.frontmatter.date}</span>
                                    </div>
                                ):null
                            }
                            
                        </div>
                        {
                            isIndex ?(
                                <div>
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