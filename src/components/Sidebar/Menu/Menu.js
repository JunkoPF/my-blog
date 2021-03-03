//@ flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';


const Menu = () => {
    return (
        <div className={styles['menu']}>
            <ul className={styles['menu__list']}>
                <li className={styles['menu__list__option']}>
                    <Link to='/archive'>Archive</Link>
                </li>
                <li className={styles['menu__list__option']}>
                    <Link to='/tags-list'>Tags</Link>
                </li>
                <li className={styles['menu__list__option']}>
                    <Link to='/about'>About Me</Link>
                </li>
                <li className={styles['menu__list__option']}>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;

