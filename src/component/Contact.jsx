import React, { useState } from 'react';
import { send } from 'emailjs-com';
import styles from './css/contact.module.css'

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });


    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_bef9tj9',
            'template_t3ktf1i',
            toSend,
            "5su0JbqvtIs7_iDRr",
        )
            .then((response) => {
                alert('Message Sent')
                setToSend({
                    from_name: '',
                    to_name: '',
                    message: '',
                    reply_to: '',
                })
            })
            .catch((err) => {
                alert('Message Failed to Send')
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (

        <div className={styles.container} id="contact">
            <div className={styles.header}>
                <h1  >Contact Me</h1>
                <h3 >Contact Me</h3>
            </div>
            <div className={styles.content}>

                {/* <div id="success"></div> */}
                <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={onSubmit}>

                    <div className={styles.formGroup}>
                        <input type="text" id="name" placeholder="Your Name" name='from_name' value={toSend.from_name}
                            required="required" data-validation-required-message="Please enter your name" onChange={handleChange} />

                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" id="email" placeholder="Your Email"
                            required="required" data-validation-required-message="Please enter your email" name='reply_to' value={toSend.reply_to} onChange={handleChange} />

                    </div>


                    <div className={styles.formGroup}>
                        <textarea rows="5" id="message" placeholder="Message"
                            required="required"
                            data-validation-required-message="Please enter your message" onChange={handleChange} name='message' value={toSend.message}></textarea>

                    </div>

                    <button type="submit" id="sendMessageButton" className={styles.button} onClick={onSubmit} disabled={toSend.from_name === '' || toSend.reply_to === '' || toSend.message === ''}>Send</button>

                </form>
            </div>
        </div>


    );
}

export default Contact;