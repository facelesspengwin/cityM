import React from 'react';
import styles from './Header.scss';

import Logo from '../../../assets/imgs/Logo/Logo.svg';

const Header = () => {
    return(
        <header className={styles.Header}>
            <img className={styles.Logo} src={Logo} alt='CityMorph Logo' />
        </header>
    );
}

export default Header;