import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = () => (
    <div className={styles['menu']}>
        <span><Link to='/'>home</Link></span>
        <span><Link to='/archive'>archive</Link></span>
        <span><Link to='/about'>about</Link></span>
        <span><Link to='/tags-list'>tags</Link></span>
    </div>
)

export default Menu;