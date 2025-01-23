import React, { useContext } from "react";
import VerticalTempPlace from "../VerticalTempPlace";
import HorizontalTempPlace from "../HorizontalTempPlace";
import WeatherDetail from "../WeatherDetail";
import Clock from "../Clock";
function Home({data}) {
  
  return (
    <div className="grid md:grid-cols-[auto_auto_auto] md:grid-rows-[auto_auto_auto_auto_auto_auto] grid-cols-1 gap-[20px] sm:pb-0 pb-28">
      <div className="flex items-center md:row-span-2 md:col-span-2 justify-between p-[20px]">
        <div className="grid gap-5">
          <h1 className="text-4xl font-bold">
            {data.city.name},
            <span className="text-xl font-normal text-primary-color">
              {data.city.country}
            </span>
          </h1>
          <h1 className="text-5xl font-semibold">
            {data.list[0].main.temp}° {data.type}
          </h1>
        </div>
        <img
          src={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          alt="data.list[0].weather[0].icon"
          className="h-36"
        />
      </div>
      <div className="md:row-span-1 md:col-start-3 p-[20px]">
        <Clock />
      </div>
      <div className="md:row-start-3 md:row-span-2 md:col-span-2 bg-dark-color rounded-lg p-[20px]">
      <h2 className="text-xl font-semibold">Today Forcast</h2>
      <div className="flex flex-wrap md:justify-between justify-center">
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:01"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:06"
            temp="21°"
          />
        </div>
      </div>
      <div className="md:row-start-2 md:row-span-3 md:col-start-3  bg-dark-color rounded-lg p-[20px] grid  ">
        <h2 className="text-xl font-semibold">5 Days Forcast</h2>
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
      </div>
      <div className="md:row-start-5 md:row-span-2 md:col-span-3  bg-dark-color rounded-lg p-[20px] ">
        <h2 className="text-xl font-semibold">Weather Details</h2>
        <div className="md:flex md:flex-wrap grid grid-cols-2 md:justify-between ">
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
        </div>
        <div className="md:flex md:flex-wrap grid grid-cols-2 md:justify-between">
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
