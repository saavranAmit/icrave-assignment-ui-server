import React from "react";
export default function Review({ name, review, image }) {
    return (
        <>
            <div className="feed-box">
                <p className="feed-text">{review}</p>
                <div className="customer-detail">
                    <div className="customer-pic">
                        <img src={image} alt="" />
                        <p className="customer-name">{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}