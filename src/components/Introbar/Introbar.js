import React from 'react';
import { default as useSiteMetadata } from '../../hooks/use-site-metadata';
import { Link, withPrefix } from 'gatsby';
import styles from './Introbar.module.scss';

const Introbar = () => {
    const { author } = useSiteMetadata();
    return (
        <div className={styles['introbar']}>
            <Link to='/about'>
                <img className={styles['introbar__photo']}
                    src={withPrefix(author.photo)}
                    height='100px'
                    alt='author'
                />
            </Link>
            <h1 className={styles['introbar__name']}>{author.name}</h1>
            <h2 className={styles['introbar__intro']}>{author.intro}</h2>
        </div>
    );
}

export default Introbar;