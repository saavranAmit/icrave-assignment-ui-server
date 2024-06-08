import React from "react";

export default function Items({ image, title, content }) {
    return (
        <>
            <div className="menu-item">
                <div className="menu-img">
                    <img src={image} alt="" />
                </div>
                <div className="menu-discription">
                    <h2 className="food-tittle">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}