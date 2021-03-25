import React from 'react';
import { getIcon, getLink } from './utils';
import { Link } from 'gatsby';
import styles from './SNSLinks.module.scss';

const SNSLinks = () => {
    const SNS = [
        {
            siteName: 'email',
            userName: 'polyethylene',
        }, {
            siteName: 'github',
            userName: 'JunkoPF',
        }, {
            siteName: 'twitter',
            userName: 'polyethylene',
        }, {
            siteName: 'youtube',
            userName: 'polyethylene',
        }, {
            siteName: 'facebook',
            userName: 'polyethylene',
        },
    ];

    return (
        <ul className={styles['snslist']}>
            {
                SNS.map((sns) => (
                    <li key={sns.siteName} className={styles['snslist__item']}>
                        <Link to={getLink(sns.siteName, sns.userName)}>
                            {getIcon(sns.siteName)}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
    
}

export default SNSLinks;