import React, { useContext, useEffect, useRef, useState } from "react";
import { Data } from "../contexts/DataContext";
function SearchBar() {
  const [value, setvalue] = useState("");
  const inputRef = useRef(null);
  const { updateData } = useContext(Data);
  const handlerChange = (e) => {
    setvalue(e.target.value);
  };
  const SearchHandler = ()=>{
    setvalue(e=>{
      updateData(e)
      return ""
    });
  }
  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setvalue(e=>{
          updateData(e)
          return ""
        });
        console.log("Enter");
      }
    });
  }, []);

  return (
    <div className="bg-dark-color p-3 rounded-lg flex justify-between">
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-transparent w-full outline-none"
        value={value}
        onChange={handlerChange}
        ref={inputRef}
      />
      <button className="bg-secondary-color text-dark-color p-2 text-sm rounded-md" onClick={SearchHandler}>
        Search/Enter
      </button>
    </div>
  );
}

export default SearchBar;
