// header component

import Link from "next/link";
import meta from "../data/meta";
import styles from "../styles/Header.module.scss";

const Header = () => {

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
                    <button>
                        <i className="fas fa-bars"></i>
                    </button>
                    <button>
                        <i className="fas fa-sun"></i>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Header
