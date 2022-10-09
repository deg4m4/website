// navbar

import styles from "../styles/Navbar.module.scss";
import meta from "../data/meta";
import { selectNavState, setNavState } from "../state/navState";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {

    const navState = useSelector(selectNavState)
    const setState = useDispatch()

    const hideNavBar = () => {
        setState(setNavState(false))
    }

    return (
        <div className={`${styles.navbar} ${navState ? (styles.showNavbar) : ""}`}>
            <div className={styles.navbarHeader}>
                <span className={styles.logo}>{meta.siteName}</span>
                <button onClick={hideNavBar}>
                    <i className="fas fa-close"></i>
                </button>
            </div>
            <div className={styles.navbarBody}>
                Helloworld
            </div>
        </div>
    )
}

export default Navbar;
