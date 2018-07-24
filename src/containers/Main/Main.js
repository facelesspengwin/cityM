import React from 'react';
import styles from './Main.scss';

// import Data from '../../assets/data/content.json';

// import TextBlock from '../../components/Content/TextBlock/TextBlock';

import ComingSoon from '../../components/temp/ComingSoon';

const Main = (props) => {
    return(
        <section className={styles.Main} onClick={props.click}>
            {/* {props.pageNum !== 'form' ? <TextBlock title={Data.content[props.pageNum].title} desc={Data.content[props.pageNum].desc} /> : null}         */}
            <ComingSoon />
        </section>
    );
}

export default Main;