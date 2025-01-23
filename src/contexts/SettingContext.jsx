import React, { createContext, useState } from "react";

export const SettingContext = createContext();

export function SettingProvider ({ children }){
  const [settings, setSettings] = useState({
    temperatureUnit: "Celsius",
    windSpeed: "km/h",
    pressure: "hPa",
    notification: false,
    timeFormat: false,
    location: false,
  });

  const changeWindSpeed = (unit) => {
    setSettings((prev) => ({
      ...prev,
      windSpeed: unit,
    }));
  };

  const changePressure = (unit) => {
    setSettings((prev) => ({
      ...prev,
      pressure: unit,
    }));
  };

  const changeTemperatureUnit = (unit) => {
    setSettings((prev) => ({
      ...prev,
      temperatureUnit: unit,
    }));
  };

  const changeNotification = (unit) => {
    setSettings((prev) => ({
      ...prev,
      notification: unit,
    }));
  };

  const changeTimeFormat = (unit) => {
    setSettings((prev) => ({
      ...prev,
      timeFormat: unit,
    }));
  };
  const changeLocation = (unit) => {
    setSettings((prev) => ({
      ...prev,
      location: unit,
    }));
  };
  return (
    <SettingContext.Provider
      value={{
        settings,
        changeTemperatureUnit,
        changeLocation,
        changeNotification,
        changePressure,
        changeTimeFormat,
        changeWindSpeed,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

