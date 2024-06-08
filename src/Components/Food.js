import React, { useEffect, useState } from "react";
import { Data } from "../Database/Database";
import Types from "./subComponents/Types";

export default function Food() {
    const [content, setContent] = useState([])
    useEffect(() => {
        setContent(Data)
    }, [content])
    return (
        <>
            <section id="food">
                <h2>Learn More</h2>
                <div className="food-wraper container">

                    {content.map((data, i) => {
                        return (
                            <>
                                <Types key={i} image={data.image} heading={data.heading} btnCon={data.btnCon} />
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}