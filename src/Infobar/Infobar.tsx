import React, { ReactElement } from 'react';
import styles from './Infobar.module.scss';
import { InfobarTypes } from './Infobar.types';

const Infobar: React.FC<InfobarTypes> = ({ texts })=> (
    <div className={styles.infobar}>
        { texts.map((text) => {
            return (
                <li> { text }</li>
            );
        }) }
    </div>
);

export default Infobar;
