import React from 'react';
import styles from './Footer.scss';

import CTAButton from '../Buttons/ctaButton';

const Footer = () => {
    return(
        <footer className={styles.Footer}>
            <p>01</p>
            <CTAButton />
        </footer>
    );
}

export default Footer;