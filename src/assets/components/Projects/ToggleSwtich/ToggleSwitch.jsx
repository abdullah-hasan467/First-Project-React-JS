import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";

  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }} // Fix style syntax
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        {" "}{/* Conditionally add class 'on' or 'off' */}
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
};
