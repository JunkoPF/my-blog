import React from 'react';
import { Link } from 'gatsby';
import styles from './Pagination.module.scss';

const Pagination = ({
    hasPrevPage, hasNextPage, prevPagePath, nextPagePath
}) => (
        <div className={styles['pagination']}>
            {
                <Link to={prevPagePath}>
                    {hasPrevPage ? (<button className='magic-button'>上一页</button>) : null}
                </Link>
            }
            {
                <Link to={nextPagePath}>
                    {hasNextPage ? (<button className='magic-button'>下一页</button>) : null}
                </Link>
            }
        </div >
    );

export default Pagination;

