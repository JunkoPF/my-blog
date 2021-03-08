import React from 'react';
import styles from './Article.module.scss';

const Article = ({ title, html }) => (
    <div className={styles['article']}>
        <h1 className={styles['article__title']}>{title}</h1>
        <div className={styles['article__content']} dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
);

export default Article;