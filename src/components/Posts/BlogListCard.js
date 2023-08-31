import './BlogListCard.css';
import Link from '@docusaurus/Link';
import React from 'react';

export function BlogListCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return <Link to={props.path}
        target={props.target || '_self'}>
        <div key={props.index} className='blogcard blogContainer '>
            <div className="cardHeader">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="cardButton">
                <small>{date}</small>
            </div>
        </div>
    </Link>

}

