"use client";
import { Counter } from "@/components/Counter";
import { InputGame } from "@/components/InputGame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Counter />
      <InputGame />
    </main>
  );
}
