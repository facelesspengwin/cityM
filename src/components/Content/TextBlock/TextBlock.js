import React from 'react';
import styles from './TextBlock.scss';

const TextBlock = (props) => {
    return(
        <div className={styles.TextBlock}>
            <div className={styles.Header}>CityMorph</div>
            <div className={styles.Title}>{props.title}</div>
            <p className={styles.Description}>{props.desc}</p>
        </div>
    );
}

export default TextBlock;