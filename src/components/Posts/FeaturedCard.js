import './FeaturedCard.css';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from '../../pages/index.module.css';

export default function FeaturedCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return <div key={props.index}
        className='featcard' onClick={() => {
            window.open(props.path, "_self")
        }}>
        <div className="cardHeader">
            <h3 className={styles.gradient}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className="cardButton">
            <small
                style={{
                    fontSize: '0.8rem',
                    fontWeight: 'weight: 400',
                }}
            >{date}</small>
        </div>
    </div>

}

