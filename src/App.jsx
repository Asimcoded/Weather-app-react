import "./index.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Setting from "./components/pages/Setting";
import { useEffect } from "react";
import fetchData from "./fetchData";
import SearchBar from "./components/SearchBar";
import sample from "./sample.json";
import Cities from "./components/pages/Cities";
import {DataContext}  from "./contexts/DataContext";
function App() {
  // useEffect(() => {
  //   fetchData("Mumbai").then(data=>{
  //     console.log(data);
  //   })
  // }, [])
  // console.log(sample);

  return (
    <DataContext>
      <div className="h-screen sm:p-[30px] p-[10px] grid sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_1fr] grid-cols-[auto] gap-[20px]">
        <SideBar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home data={sample} />} />
          <Route path="/cities" element={<Cities data={sample} />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </DataContext>
  );
}

export default App;
