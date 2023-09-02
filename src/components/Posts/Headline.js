import React from 'react';
import './Headline.css';

function Headline(props) {
    return <p className={props.size}>{props.title} </p>
}

export default Headline;