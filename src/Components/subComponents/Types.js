import React from "react";

export default function Types({ image, heading, btnCon }) {
    return (
        <>
            <div className="food-items item1">
                <div className="img-container">
                    <img src={image} alt="" />
                    <div className="img-content">
                        <h3>{heading}</h3>
                        <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary">{btnCon}</a>
                    </div>
                </div>

            </div>
        </>
    )
}