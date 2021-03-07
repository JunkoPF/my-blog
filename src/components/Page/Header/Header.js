import React from 'react';
import Title from './Title';
import Menu from './Menu';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles['header']}>
            <div className={styles['header__content']}>
                <Title />
                <Menu />
            </div>
        </div>
    )
}

export default Header;