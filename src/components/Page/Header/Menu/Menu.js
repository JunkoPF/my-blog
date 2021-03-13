import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = () => (
    <div className={styles['menu']}>
        <Link to='/'><span>home</span></Link>
        <Link to='/archive'><span>archive</span></Link>
        <Link to='/about'><span>about</span></Link>
        <Link to='/tags-list'><span>tags</span></Link>
    </div>
)

export default Menu;