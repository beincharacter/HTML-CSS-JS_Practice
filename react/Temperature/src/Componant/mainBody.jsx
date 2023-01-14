import React, { useState } from "react";
import './mainBody.css'

export function TempBody() {
    const [temperature, setTemperature] = useState(72);
    const increaseTemperature = () => setTemperature(temperature + 1);
    const decreaseTemperature = () => setTemperature(temperature - 1);

    const backgroundColor = temperature <= 68 ? "rgb(25,91,165)" : temperature <= 72 ? "green" : "red";

    return (
        <div className="mainbody">
            <div className="temp-reading">
                <div className="temp-body-circle"  style={{ backgroundColor }}>{temperature}°F</div>
            </div>
            <div className="temp-buttons">
                <span className="increase-btn btn" onClick={increaseTemperature}>+</span>
                <span className="decrease-btn btn" onClick={decreaseTemperature}>-</span>
            </div>
        </div>
    )
}
