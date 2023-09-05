import React from 'react';

export default function Caption(props) {
    return <p style={{ 
        justifyContent: "center",
        display: "flex", color: "#636262", fontSize: "14px" }}>
        {`${props.caption}`}
    </p>
};