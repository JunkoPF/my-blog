import React from 'react';
import { default as useSiteMetadata } from '../../../../hooks/use-site-metadata';
import { Link, withPrefix } from 'gatsby';
import styles from './Introbar.module.scss';
import SNSLinks from '../../../SNSLinks';

const Introbar = () => {
    const { author } = useSiteMetadata();
    return (
        <div className={styles['introbar']}>
            <h1 className={styles['introbar__title']}>
                Real quality means making sure that people are proud of the code they write, that they're involved and taking it personally.
            </h1>
            <div className={styles['introbar__info']}>
                <Link to='/about'>
                    <img className={styles['introbar__photo']}
                        src={withPrefix(author.photo)}
                        alt='author'
                    />
                </Link>
                <h1 className={styles['introbar__name']}>{author.name}</h1>
                <h2 className={styles['introbar__intro']}>{author.intro}</h2>
                <SNSLinks />
            </div>
        </div>
    );
}

export default Introbar;