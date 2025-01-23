import "./index.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Setting from "./components/pages/Setting";
import { useContext, useEffect, useState } from "react";
import fetchData from "./fetchData";
import SearchBar from "./components/SearchBar";
import sample from "./sample.json";
import Cities from "./components/pages/Cities";

function App() {
  // useEffect(() => {
  //   fetchData("Mumbai").then(data=>{
  //     console.log(data);
  //   })
  // }, [])
  // console.log(sample);
  const [isFocused, setIsFocused] = useState(false);
  const getFocus = (data) => {
    setIsFocused(data);
  };
  // console.log(isFocused);
  return (
    <div className="h-screen sm:p-[30px] p-[10px] grid sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_1fr] grid-cols-[auto] gap-[20px]">
      {isFocused && <div className="absolute w-full h-svh top-0 left-0 bg-bg-color opacity-90 z-20 transition-all duration-1000"></div>}
      
      <SideBar />
      <SearchBar getFocus={getFocus} />
      <Routes>
        <Route path="/" element={<Home data={sample} />} />
        <Route path="/cities" element={<Cities data={sample} />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
