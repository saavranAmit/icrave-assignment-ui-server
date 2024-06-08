import React, { useState, useEffect } from "react";
import { Data3 } from "../Database/Database";
import Review from "./subComponents/Review";

export default function Feedback() {
    const [content, setContent] = useState([])

    useEffect(() => {
        setContent(Data3)
    }, [content])
    return (
        <>
            <section id="feedback">
                <h2 className="feed-tittle">Reviews</h2>
                <div className="feed-container container">

                    {content.map((data, i) => {
                        return (
                            <>
                                <Review key={i} name={data.name} image={data.image} review={data.review} />
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}