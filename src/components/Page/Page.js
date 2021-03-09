import React from 'react';
import Header from './Header';
import styles from './Page.module.scss';

const Page = ({ children, isIndex }) => (
    <div className={styles['page']}>
        <Header className={styles['page__header']} isIndex={isIndex}/>
        <div className={styles['page__content']}>
            {children}
        </div>
    </div>
)

export default Page;