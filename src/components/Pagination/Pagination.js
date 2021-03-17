import React from 'react';
import { Link } from 'gatsby';
import styles from './Pagination.module.scss';

const Pagination = ({
    hasPrevPage, hasNextPage, prevPagePath, nextPagePath
}) => (
        <div className={styles['pagination']}>
            {/*
            {hasPrevPage ? (<Link to={prevPagePath}>Previous</Link>) : (<div>Previous</div>)}
            {hasNextPage ? (<Link to={nextPagePath}>Next</Link>) : (<div>Next</div>)}
            */}

            {
                <Link to={prevPagePath}>
                    <button className={hasPrevPage ? 'magic-button' : null}>
                        Prev
                    </button>
                </Link>
            }
            {
                <Link to={nextPagePath}>
                    <button className={hasNextPage ? 'magic-button' : null}>
                        Next
                    </button>
                </Link>
            }
        </div >
    );

export default Pagination;

