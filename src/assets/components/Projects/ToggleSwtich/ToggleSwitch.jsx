import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = ()=>{
const [isOn, setIsOn]= useState(false);

const handleToggleSwich = () =>{
    setIsOn(!isOn);
}

    return (
        <div className="toggle-switch" onClick={handleToggleSwich}>
        <div className={`switch ${isOn ? "on" :"off"} `}>
        <span className="switch-state">{isOn? "ON":"OFF"}</span>

        </div>
        </div>
    )
}
