import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className=" nav-container container">
                    <input type="checkbox" />
                    <div className="hb-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu">
                        <li><a href="#showcase">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#food">Learn More</a></li>
                        <li><a href="#feedback">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <h1 className="logo">iCrave</h1>
                </div>
            </nav>
        </>
    )
}