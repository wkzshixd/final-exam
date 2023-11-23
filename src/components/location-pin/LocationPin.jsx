import React from 'react';
import {Icon} from '@iconify/react'
import styles from "./LocationPin.module.css"

const LocationPin = ({text}) => {
    return (
        <div>
            <Icon className={styles.pin} icon="majesticons:map-marker-line"/>
            <p className="pin-text">{text}</p>
        </div>
    );
};

export default LocationPin;