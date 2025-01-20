import React, { useState } from "react";
import HorizontalTempPlace from "../HorizontalTempPlace";
import VerticalTempPlace from "../VerticalTempPlace";
import CityDisplay from "../CityDisplay";

function Cities({ data }) {
  const [selectedCom, setSelectedCom] = useState("Component1");
  const handleClick = (componentName) => {
    setSelectedCom(componentName);
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:pb-0 pb-28">
      <div className=" lg:col-span-2 rounded-lg grid grid-rows-4 gap-[20px]">
        <CityDisplay
          city={data.city.name}
          country={data.city.country}
          url={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          temp={data.list[0].main.temp + "° "}
          isSelect={selectedCom === "Component1"}
          onClick={() => handleClick("Component1")}
        />
        <CityDisplay
          city={data.city.name}
          country={data.city.country}
          url={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          temp={data.list[0].main.temp + "° "}
          isSelect={selectedCom === "Component2"}
          onClick={() => handleClick("Component2")}
        />
        <CityDisplay
          city={data.city.name}
          country={data.city.country}
          url={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          temp={data.list[0].main.temp + "° "}
          isSelect={selectedCom === "Component3"}
          onClick={() => handleClick("Component3")}
        />
        <CityDisplay
          city={data.city.name}
          country={data.city.country}
          url={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          temp={data.list[0].main.temp + "° "}
          isSelect={selectedCom === "Component4"}
          onClick={() => handleClick("Component4")}
        />
      </div>
      <div className="p-[20px] rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="grid gap-4">
            <div className="">
              <h1 className="text-4xl font-bold">{data.city.name}</h1>
              <p className="text-xl text-primary-color">{data.city.country}</p>
            </div>
            <h1 className="text-4xl font-semibold">
              {data.list[0].main.temp}° {data.type}
            </h1>
          </div>
          <img
            src={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            alt={data.list[0].weather[0].icon}
            className="h-36"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Today Forcast</h2>
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
        <div className="mt-4">
          <h2 className="text-xl font-semibold">3 Days Forcast</h2>
          <div className="flex flex-wrap justify-between">
            <VerticalTempPlace
              iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
              time="Monday"
              temp="21°"
            />
            <VerticalTempPlace
              iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
              time="Monday"
              temp="21°"
            />
            <VerticalTempPlace
              iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
              time="Monday"
              temp="21°"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
