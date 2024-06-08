import React, { useEffect, useState } from "react";
import Items from "./subComponents/Items";
import { Data2 } from "../Database/Database";

export default function FoodMenu() {
    const [content, setContent] = useState([])

    useEffect(() => {
        setContent(Data2)
    }, [content])
    return (
        <>
            <section id="food-menu">
                <h2 className="menu-head">Design Sense Features</h2>
                <div className="menu-container container">

                    {content.map((data, i) => {
                        return (
                            <>
                                <Items key={i} image={data.image} title={data.title} content={data.content} />
                            </>
                        )
                    })}


                    {/* <div className="menu-item">
                        <div className="menu-img">
                            <img src="./images/food-menu1.jpg" alt="" />
                        </div>
                        <div className="menu-discription">
                            <h2 className="food-tittle">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad.</p>
                            <p className="price">Price : &#8377; 300</p>
                        </div>
                    </div> */}
                </div>

            </section>
        </>
    )
}