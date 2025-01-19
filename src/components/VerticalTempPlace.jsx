import React from "react";

function VerticalTempPlace({ iconPath, time, temp}) {
  return (
    <div className="text-center mt-2">
      <h3 className="font-extralight text-grey">{time}</h3>
      <img src={iconPath} alt="icon" className="my-2" />
      <h3 className="text-lg">{temp}</h3>
    </div>
  );
}

export default VerticalTempPlace;
