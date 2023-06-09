import { useEffect, useState } from "react";

export function AlertWithDelay() {
  const [delay, setDelay] = useState("4");
  const [startAlert, setStartAlert] = useState(false);

  const handleOnClick = () => {
    setStartAlert(true);
  };

  const handleOnChange = (event) => {
    setDelay(event.target.value);
  };

  useEffect(() => {
    let timerId;

    if (startAlert) {
      timerId = setTimeout(
        () => alert(`I alert you after ${delay} seconds`),
        delay * 1000
      );
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, startAlert]);

  return (
    <div
      style={{
        border: "1px solid green",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <label for="my-input">Type second for delay of alert</label>
      <input
        value={delay}
        onChange={handleOnChange}
        type="number"
        id="my-input"
      />
      {delay.length === 0 ? (
        <p>Please insert delay in seconds</p>
      ) : (
        <p>Alerting after {delay}</p>
      )}
      <button disabled={delay.length === 0} onClick={handleOnClick}>
        Alert
      </button>
    </div>
  );
}
