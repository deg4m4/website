// header component

import Link from "next/link";
import meta from "../data/meta";
import styles from "../styles/Header.module.scss";
import { useDispatch } from "react-redux";
import { setNavState } from "../state/navState";
import { useEffect, useState } from "react";
import detectMob from "../util/detectMob";

const Header = () => {

    const despatch = useDispatch();

    const showNavbar = () => {
        despatch(setNavState(true))
    }


    //tmp
    let [themePoint, setThemePoint] = useState(1);
    let themes = ["__", "gold", "orange", "pink", "aqua", "purpal", "lightpink"];
    const changeTheme = () => {
        let b = document.body;
        b.className = ""
        b.classList.add(`${themes[themePoint]}-theme`)
        setThemePoint(themePoint == 6 ? 0 : themePoint + 1);
    }

    // is scroll
    let [isScroll, setIsScroll] = useState(false);
    useEffect(() => document.onscroll = () => window.scrollY > (detectMob() ? 0 : 100) ? setIsScroll(true) : setIsScroll(false), [])

    return (
        <div className={`${styles.header} ${isScroll ? styles.header_scroll : ""}`}>
            <span className={styles.logo}>{meta.siteName}</span>
            <div className={styles.navLinks}>
                <div className={`${styles.navBarLinks} link-class`}>
                    <Link href={"/"}>
                        Home
                    </Link>
                    <Link href={"/about"}>
                        About
                    </Link>
                    <Link href={"/blog"}>
                        Blog
                    </Link>
                    <Link href={"/contact"}>
                        Contact
                    </Link>
                </div>
                <div className={styles.navBarBtn}>
                    <button onClick={changeTheme}>
                        <i className="fas fa-sun"></i>
                    </button>
                    <button onClick={showNavbar}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Header
