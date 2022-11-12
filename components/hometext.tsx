// home text

import meta from "../data/meta";
import styles from "../styles/HomeText.module.scss";

const HomeText = () => {
    return (
        <div className={styles.homeText}>

            <div className={styles.titles}>
                <div className={styles.mainTitle}>
                    Hi There, I&apos;m <span className={styles.textPrimary}>{meta.showname}</span>!
                </div>
                <div className={styles.subTitle}>
                    a computer programmer
                </div>
            </div>

            <div className={styles.des}>
                <div className={styles.desBlock}>
                    <span className={styles.desBlockTitle}>
                        technologies
                    </span>
                    <span className={styles.desBlockNum}>
                        20+
                    </span>
                </div>
                <div className={styles.desBlock}>
                    <span className={styles.desBlockTitle}>
                        years of experience
                    </span>
                    <span className={styles.desBlockNum}>
                        2+
                    </span>
                </div>
                <div className={styles.desBlock}>
                    <span className={styles.desBlockTitle}>
                        completed projects
                    </span>
                    <span className={styles.desBlockNum}>
                        2+
                    </span>
                </div>
                <div className={styles.desBlock}>
                    <span className={styles.desBlockTitle}>
                        repositories
                    </span>
                    <span className={styles.desBlockNum}>
                        10+
                    </span>
                </div>

            </div>


        </div>
    )
}

export default HomeText;
