import React from "react";
import styles from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>
            <div className={styles.socials}>
                <a
                    href="https://img4.labirint.ru/rc/53e53e7b5eb41557e003185ccd021e58/363x561q80/books5/48952/cover.jpg?1280394613"
                    rel="noreferrer"
                    target="_blank">
                    <svg className="icon">
                        <use
                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
                        />
                    </svg>
                </a>
                <a
                    href="https://img4.labirint.ru/rc/53e53e7b5eb41557e003185ccd021e58/363x561q80/books5/48952/cover.jpg?1280394613"
                    rel="noreferrer"
                    target="_blank">
                    <svg className="icon">
                        <use
                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
                        />
                    </svg>
                </a>
                <a
                    href="https://img4.labirint.ru/rc/53e53e7b5eb41557e003185ccd021e58/363x561q80/books5/48952/cover.jpg?1280394613"
                    rel="noreferrer"
                    target="_blank">
                    <svg className="icon">
                        <use
                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
}
