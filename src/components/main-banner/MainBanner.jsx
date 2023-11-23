import styles from "./MainBanner.module.css"

const MainBanner = () => {
    return (
        <div id="mainBanner">
            <div className={styles.banner}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <span className={styles.dominate}>DOMINATE <br/></span>
                        <span className={`${styles.destroy} ${styles.font__effect}`}>DESTROY<br/></span>
                        <span className={styles.drive}>DRIVE <br/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;