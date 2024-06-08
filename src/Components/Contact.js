import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState("")

    const validateForm = () => {
        const errors = [];
        if (!email) {
            errors.push('Email address is required');
        } else if (!validateEmail(email)) {
            errors.push('Email address is invalid');
        }
        if (!message) {
            errors.push('Message is required');
        }
        if (!name) {
            errors.push('Name is required');
        }
        setErrors(errors);
        return errors.length === 0;
    };

    const validateEmail = (email) => {

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const handdleForm = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const templateParams = {
            email,
            name,
            message,
        };

        emailjs.send('service_l6sqawv', "template_rir713j", templateParams, { publicKey: 'zuABe6Flg0sGYUDAS', })
            .then((response) => {
                setStatus("Message send successfully.")

            }, (error) => {
                setStatus("Server Issue.")
            });
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <>
            <section id="contact">
                <div className="contact-container container">
                    <div className="contact-img">
                        <img src="./images/icrave14.jpg" alt="" />
                    </div>
                    <form className="form" onSubmit={handdleForm}>
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" placeholder="E-Mail" onChange={(e) => { setEmail(e.target.value) }} />
                        <textarea cols="30" rows="10" placeholder="Type Here" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                        {errors && <p style={{ color: "red", fontSize: "1.8rem" }}>{errors[0]}</p>}
                        {status && <p style={{ color: "green", fontSize: "1.8rem" }}>{status}</p>}
                        <button style={{ border: "none" }} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}