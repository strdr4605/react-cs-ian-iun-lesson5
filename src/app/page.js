"use client";
import { Counter } from "@/components/Counter";
import { InputGame } from "@/components/InputGame";
import { AlertWithDelay } from "@/components/AlertWithDelay";
import styles from "./page.module.css";
import { Checkbox } from "@/components/Checkbox";
import { useState } from "react";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  const onChange = (value) => {
    setShowAlert(value);
  };

  return (
    <main className={styles.main}>
      <Checkbox checked={showAlert} onChange={onChange} />

      {showAlert ? <AlertWithDelay /> : <p>Check the box to show alert</p>}
      {/* <Counter /> */}
      {/* <InputGame /> */}
    </main>
  );
}
