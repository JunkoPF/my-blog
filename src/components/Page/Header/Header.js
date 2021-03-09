import React from 'react';
import Title from './Title';
import Menu from './Menu';
import Introbar from './Introbar';
import SNSLinks from '../../SNSLinks';
import styles from './Header.module.scss';

const Header = ({ isIndex }) => {
    return (
        <header className={styles['header']}>
            <div className={styles['header__content']}>
                <div className={styles['header__top']}>
                    <Title />
                    <Menu />
                </div>
                    {
                        isIndex ? (
                            <div className={styles['header__bottom']}>
                                <Introbar />
                                <SNSLinks />
                            </div>
                        ) : []
                    }
            </div>
        </header>
    )
}

export default Header;