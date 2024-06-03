import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={"/categories/:id"}>Link</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="/help" target="_blank" className={styles.link}>
                    Help
                </a>
                <a
                    href="/help"
                    target="_blank"
                    className={styles.link}
                    style={{ textDecoration: "underline" }}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
}
