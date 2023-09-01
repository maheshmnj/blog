import './BlogListCard.css';
import Link from '@docusaurus/Link';
import React from 'react';

export default function BlogListCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return <div key={props.index} className='blogcard blogContainer' onClick={() => {
        window.open(props.path, "_self")
    }}>
        <div className="cardHeader">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className="cardButton">
            <small>{date}</small>
        </div>
    </div>

}

