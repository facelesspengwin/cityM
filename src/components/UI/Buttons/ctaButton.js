import React from 'react';
import { Button } from 'reactstrap';
import styles from './ctaButton.scss';

const ctaButtons = () => {
    return(
        <div className={styles.ctaButton}>
            <Button outline>request a quote</Button>{' '}
        </div>
    );
}

export default ctaButtons;