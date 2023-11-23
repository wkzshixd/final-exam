import styles from "./AboutSection.module.css"
import {Link} from "react-router-dom";
import {Icon} from '@iconify/react';

const AboutSection = (props) => {
    return (
        <div className={styles.banner}>
            <div className={styles.scroll__anchor} id="aboutSection"></div>
            <div className={styles.description}>
                <div className={styles.title}>Выбирайте, заказывайте, наслаждайтесь!</div>
                <div className={styles.content}>
                    Добро пожаловать на сайт DDD AUTO, ведущего поставщика высококлассных автомобилей.
                    Наш автомагазин является надежным партнером для автолюбителей,
                    предоставляя широкий выбор качественных автомобилей и отличное обслуживание.
                    Наша команда профессионалов с большим опытом в автомобильной индустрии всегда готова
                    помочь вам с выбором и предоставить информацию о всех наших автомобилях.
                </div>
                <Link className={styles.button} to={"/cars"}>
                    <span>Заказать сейчас</span>
                    <Icon className={styles.button__icon} icon="tabler:arrow-up" rotate={1}/>
                </Link>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <Icon className={styles.icon} icon="maki:car"/>
                    Более 3,000 автомобилей в нашем ассортименте, включая новые и б/у.
                </div>
                <div className={styles.stat}>
                    <Icon className={styles.icon} icon="mdi:account-check"/>
                    95% удовлетворенных клиентов и положительных отзывов.
                </div>
                <div className={styles.stat}>
                    <Icon className={styles.icon} icon="uil:10-plus"/>
                    Более 10 лет опыта в автомобильной индустрии.
                </div>
                <div className={styles.stat}>
                    <Icon className={styles.icon} icon="mdi:map-marker-outline"/>
                    7 филиалов по всей стране для вашего удобства.
                </div>
            </div>
        </div>)
};


export default AboutSection;