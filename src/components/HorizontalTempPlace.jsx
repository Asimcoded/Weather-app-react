import React from "react";

function HorizontalTempPlace({ iconPath, time, temp, weather = "Rain" }) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-grey">{time}</h3>
      <div className="flex items-center">
        <img src={iconPath} alt="icon" className="h-10 mr-2" />
        {weather && <p>{weather}</p>}
      </div>
      <h3>{temp}</h3>
    </div>
  );
}

export default HorizontalTempPlace;
