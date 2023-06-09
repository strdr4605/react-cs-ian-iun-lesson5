import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Counter mounted");
  }, []);

  useEffect(() => {
    console.log("count updated");
  }, [count]);

  useEffect(() => {
    console.log("count2 updated");
  }, [count2]);

  useEffect(() => {
    console.log("count2 or count updated");
  }, [count2, count]);

  useEffect(() => {
    console.log("Counter render from useEffect");
  });

  console.log("Counter render");

  return (
    <div className={styles.container}>
      <p>Count: {count}</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count2: {count2}</p>
      <button className={styles.button} onClick={() => setCount2(count2 + 1)}>
        Increment
      </button>
    </div>
  );
}
