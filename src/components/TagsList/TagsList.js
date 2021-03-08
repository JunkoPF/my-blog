import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styles from './TagsList.module.scss';


const TagsList = ({ tags, }) => (
    <div className={styles['tagsList']}>
        {
            _.orderBy(tags, ['totalCount'], ['desc']).map((tagInfo) => (
                <div className={styles['tagsList__content']} key={tagInfo.tag}>
                    <Link to={`/tag/${_.kebabCase(tagInfo.tag)}`} >
                        <span className={styles['tagsList__content__tag']}>{tagInfo.tag}</span> 
                        <span className={styles['tagsList__content__count']}>({tagInfo.totalCount})</span>
                    </Link>
                </div>

            ))
        }
    </div >
);

export default TagsList;