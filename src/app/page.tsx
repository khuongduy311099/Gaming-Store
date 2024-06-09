"use client";

import styles from "./page.module.scss";
import MainLayout from "./layout/MainLayout";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainLayout />
        </main>
    );
}
