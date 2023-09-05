import React from 'react';
import './PostCard.css';
function PostCard(props) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
    return <div className="postcard" onClick={() => {
        window.open(props.path, "_blank");
    }}>
        <p className='postdate'>{date}</p>
        <div style={{ width: '20px' }}></div>
        <p className='title'>{props.title}</p>
    </div>
}

export default PostCard;