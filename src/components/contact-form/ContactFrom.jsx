import React from 'react';
import styles from "./ContactForm.module.css"
import {Link} from "react-router-dom";

const ContactFrom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll__anchor} id="contactForm"></div>
            <form className={styles.form}>
                <label className={styles.label}>
                    Name:
                    <input className={styles.input} type="text" name="name"/>
                </label>
                <label className={styles.label}>
                    Name:
                    <input className={styles.input} type="text" name="name"/>
                </label>
                <label className={styles.label}>
                    Name:
                    <input className={styles.input} type="text" name="name"/>
                </label>
                <Link className={styles.button} to={"/cars"}>
                    <span>Связаться</span>
                </Link>
            </form>
        </div>
    );
};

export default ContactFrom;