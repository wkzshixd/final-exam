import React, {useEffect} from 'react';
import styles from "./Navbar.module.css"
import {Link} from "react-scroll"
import {useDispatch, useSelector} from "react-redux";
import {collapsed, full, selectNavbarState} from "../../slices/navbarSlice";

const Navbar = (props) => {
    const show = useSelector(selectNavbarState)
    const dispatch = useDispatch()


    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        function mutateNavbar(e) {
            currentScrollPosition = window.scrollY;
            if (previousScrollPosition - currentScrollPosition < 0) {
                dispatch(collapsed())
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                dispatch(full());
            }
            previousScrollPosition = currentScrollPosition;
        }

        window.addEventListener('scroll', mutateNavbar);

    }, [dispatch]);


    return (
        <div className={`${styles.navbar} ${show ? styles.active : styles.collapsed}`}>
            <div className={styles.main__title}>DDD AUTO</div>
            <div className={styles.button__wrapper}>
                <Link
                    onClick={() => {
                        setTimeout(() => {
                            dispatch(full())
                        }, [410])
                    }}
                    className={styles.navbar__button}
                    to="mainBanner"
                    smooth={true}
                    duration={400}>Заказать</Link>
                <Link
                    onClick={() => {
                        setTimeout(() => {
                            dispatch(collapsed())
                        }, [415])
                    }}
                    className={styles.navbar__button}
                    to="aboutSection"
                    smooth={true}
                    duration={400}
                >О нас</Link>
                <Link
                    onClick={() => {
                        setTimeout(() => {
                            dispatch(collapsed())
                        }, [415])
                    }}
                    className={styles.navbar__button}
                    to="cards"
                    smooth={true}
                    duration={400}>Новинки</Link>
                <Link className={styles.navbar__button} to="contactForm" smooth={true} duration={400}>Связаться</Link>
            </div>
        </div>
    );
};

export default Navbar;