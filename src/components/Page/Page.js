import React from 'react';
import Header from './Header';
import styles from './Page.module.scss';

const Page = ({ children }) => (
    <div className={styles['page']}>
        <Header />
        <div className={styles['page__content']}>
            {children}
        </div>
    </div>
)

export default Page;