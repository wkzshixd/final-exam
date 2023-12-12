import React from 'react';
import styles from "./ContactForm.module.css"
import {Link} from "react-router-dom";

const ContactFrom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll__anchor} id="contactForm"></div>
            <form className={styles.form}>
                <label className={styles.label}>Name:</label>
                <input className={styles.input} type="text" name="name"/>
                <label className={styles.label}>Email:</label>
                <input className={styles.input} type="text" name="email"/>
                <Link className={styles.button} to={"/cars"}>
                    <submit>Связаться</submit>
                </Link>
            </form>
        </div>
    );
};

export default ContactFrom;