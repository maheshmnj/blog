import React from 'react';
import './PostCard.css';
function PostCard(props) {
    const date = new Date(props.date);
    date.setUTCHours(0, 0, 0, 0);
    const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    return <div className="postcard" onClick={() => {
        window.open(props.path, "_blank");
    }}>
        <p className='postdate'>{formattedDate}</p>
        <div style={{ width: '20px' }}></div>
        <p className='title'>{props.title}</p>
    </div>
}

export default PostCard;