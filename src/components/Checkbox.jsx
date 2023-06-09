import { useState } from "react";

export function Checkbox(props) {
  const { checked, onChange } = props;

  const handleCheckboxChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <input
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
    </div>
  );
}
