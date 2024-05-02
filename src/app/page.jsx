"use client"
import styles from './page.module.css'
import Quiz from "./components/quiz/quiz";

export default function Home() {
  return (
    <div className={styles.container}>
        <Quiz/>
    </div>
  );
}
