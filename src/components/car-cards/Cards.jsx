import CarCard from "../car-card/CarCard";
import styles from "./Cards.module.css"
import cars from "./cars"

const Cards = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll__anchor} id="cards"></div>
            <div className={styles.title}>
                <h1>CHECK OUT OUR BESTSELLERS!</h1>
            </div>
            <div className={styles.cards}>
                {cars.map((car) => {
                    return <CarCard
                        key={car.id}
                        id={car.id}
                        img={car.img}
                        alt={car.alt}
                        title={car.title}
                        body={car.body}
                        link={car.link}
                    />
                })}
            </div>
        </div>
    )
}

export default Cards;