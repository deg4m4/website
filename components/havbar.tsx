// navbar

import styles from "../styles/Navbar.module.scss";
import meta from "../data/meta";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarHeader}>
                <span className={styles.logo}>{meta.siteName}</span>
                <button>
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
