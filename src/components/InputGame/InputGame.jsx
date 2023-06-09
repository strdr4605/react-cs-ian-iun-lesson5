import { useEffect, useState } from "react";
import styles from "./InputGame.module.css";

export function InputGame() {
  const [value, setValue] = useState("");
  const [showLost, setShowLost] = useState(false);

  useEffect(() => {
    if (value.length > 4) {
      setShowLost(true);
    }
  }, [value]);

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>Input Game</h1>
      <h3 className={styles.warn}>If you write more than 4 chars you lose</h3>
      <input value={value} onChange={handleOnChange} type="text" />
      <h2>Value: {value}</h2>
      {showLost && <h3 className={styles.lost}>You lost</h3>}
    </div>
  );
}
