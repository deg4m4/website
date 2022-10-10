// header component

import Link from "next/link";
import meta from "../data/meta";
import styles from "../styles/Header.module.scss";
import { useDispatch } from "react-redux";
import { setNavState } from "../state/navState";

const Header = () => {

    const despatch = useDispatch();

    const showNavbar = () => {
        despatch(setNavState(true))
    }

    //tmp
    const changeTheme = () => {
        let b = document.body;
        b.classList.contains("pink-theme") ? b.classList.remove("pink-theme") : b.classList.add("pink-theme")
    }

    return (
        <div className={styles.header}>
            <span className={styles.logo}>{meta.siteName}</span>
            <div className={styles.navLinks}>
                <div className={styles.navBarLinks}>
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
