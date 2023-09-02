import React from 'react';
import './PostCard.css';
function PostCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });
    return <div className="postcard" onClick={() => {
        window.open(props.path, "_blank");
    }}>
        <p>{date}</p>
        <div style={{ width: '20px' }}></div>
        <h3>{props.title}</h3>
    </div>
}

export default PostCard;