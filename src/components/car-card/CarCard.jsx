import React from 'react';
import styles from "./CarCard.module.css"
import {Link} from "react-router-dom";

const CarCard = ({id, img, title, body, link}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={img} alt="car"/>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.body}>{body}</p>
            <Link to={`cars/${id}`} className={styles.button}>Learn More</Link>
        </div>
    );
};

export default CarCard;