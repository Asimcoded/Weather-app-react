import React, { useContext, useState } from "react";
import UnitPlace from "../UnitPlace";
import TogglePlace from "../TogglePlace";
import { SettingContext } from "../../contexts/SettingContext";

function Setting() {
  const {settings,
    changeTemperatureUnit,
    changeLocation,
    changeNotification,
    changePressure,
    changeTimeFormat,
    changeWindSpeed,} = useContext(SettingContext)
  const [temp, setTemp] = useState("Celsius")
  const [location, setLocation] = useState(false)
  const [notify, setNotify] = useState(false)
  const [pressure, setPressure] = useState("hPa")
  const [timeFormat, setTimeFormat] = useState(false)
  const [windSpeed, setWindSpeed] = useState("km/h")
  const getTemp = (unit)=>{
    setTemp(unit)
  }
  const getWindSpeed = (unit)=>{
    setWindSpeed(unit)
  }
  const getPressure = (unit)=>{
    setPressure(unit)
  }
  const getLocation= ()=>{
    setLocation(perv=>!perv)
  }
  const getNotify = ()=>{
    setNotify(perv=>!perv)
  }
  const getTimeFormat = ()=>{
    setTimeFormat(perv=>!perv)
  }
  const handleSave = () =>{
    changeTemperatureUnit(temp)
    changePressure(pressure)
    changeWindSpeed(windSpeed)
    changeLocation(location)
    changeNotification(notify)
    changeTimeFormat(timeFormat)
  }
  return (
    <div className="py-[20px] sm:pb-0 pb-28">
      <h2 className="font-semibold text-2xl">Units</h2>
      <div className="bg-dark-color rounded-lg p-[20px] grid gap-5 my-3">
        <UnitPlace title="Temperature" label={['Celsius','Fahrenheit']} changeFunction={getTemp}/>
        <UnitPlace title="Wind Speed" label={['km/h','m/s','Knots']} changeFunction={getWindSpeed}/>
        <UnitPlace title="Pressure" label={['hPa','Inches','kPa','mm']} changeFunction={getPressure}/>
      </div>
      <h2 className="font-semibold text-2xl">General</h2>
      <div className="bg-dark-color rounded-lg p-[20px] grid gap-5 my-3">
        <TogglePlace title="Notification" desc="Beware of weather" changeFunction={getNotify}/>
        <TogglePlace title="12 hour time format" changeFunction={getTimeFormat}/>
        <TogglePlace title="Location" desc="Get weather of your loaction" changeFunction={getLocation}/>
      </div>
      <button className="bg-secondary-color text-dark-color hover:bg-dark-color hover:text-secondary-color p-2 rounded-md transition-all duration-200" onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default Setting;