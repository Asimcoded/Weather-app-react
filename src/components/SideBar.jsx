import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons/home-icon.svg";
import SearchIcon from "../assets/icons/search-icon.svg";
import SettingIcon from "../assets/icons/setting-icon.svg";
function SideBar() {
  const inactiveStateStyle = "opacity-50"
  return (
    <div className="h-full min-h-[400px] bg-dark-color rounded-lg p-4 row-span-2 flex flex-col justify-center gap-10">
      <NavLink to="/" className={({isActive})=>(!isActive ? inactiveStateStyle : "")+ " transition-all duration-200"}>
        <div className="flex flex-col gap-1 items-center">
          <img src={HomeIcon} alt="Home" className="h-[40px]" />
          <p className="text-xs font-thin">Weather</p>
        </div>
      </NavLink>
      <NavLink to="/cities" className={({isActive})=>(!isActive ? inactiveStateStyle : "")+ " transition-all duration-200"}>
        <div className="flex flex-col gap-1 items-center">
          <img src={SearchIcon} alt="City" className="h-[35px]" />
          <p className="text-xs font-thin">Cities</p>
        </div>
      </NavLink>
      <NavLink to="/setting" className={({isActive})=>(!isActive ? inactiveStateStyle : "")+ " transition-all duration-200"}>
        <div className="flex flex-col gap-1 items-center">
          <img src={SettingIcon} alt="Setting" className="h-[35px]" />
          <p className="text-xs font-thin">Setting</p>
        </div>
      </NavLink>
    </div>
  );
}

export default SideBar;
