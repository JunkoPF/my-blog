import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({
    hasPrevPage, hasNextPage, prevPagePath, nextPagePath
}) => (
        <div>
            {hasPrevPage ? (<Link to={prevPagePath}>Previous</Link>) : (<div>Previous</div>)}
            {hasNextPage ? (<Link to={nextPagePath}>Next</Link>) : (<div>Next</div>)}
        </div>
    );

export default Pagination;

