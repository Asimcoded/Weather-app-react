import React from "react";
import UnitPlace from "../UnitPlace";
import TogglePlace from "../TogglePlace";

function Setting() {
  return (
    <div className="py-[20px]">
      <h2 className="font-semibold text-2xl">Units</h2>
      <div className="bg-dark-color rounded-lg p-[20px] grid gap-5 my-3">
        <UnitPlace title="Temperature" label={['Celsius','Fahrenheit']}/>
        <UnitPlace title="Wind Speed" label={['km/h','m/s','Knots']}/>
        <UnitPlace title="Pressure" label={['hPa','Inches','kPa','mm']}/>
      </div>
      <h2 className="font-semibold text-2xl">General</h2>
      <div className="bg-dark-color rounded-lg p-[20px] grid gap-5 my-3">
        <TogglePlace title="Notification" desc="Beware of weather"/>
        <TogglePlace title="12 hour time format"/>
        <TogglePlace title="Location" desc="Get weather of your loaction"/>
      </div>
    </div>
  );
}

export default Setting;
