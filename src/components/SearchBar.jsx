import React, { useRef, useState, useContext } from "react";
import fetchData from "../fetchData";
import { DataContext } from "../contexts/DataContext";
function SearchBar({ getFocus }) {
  const [value, setvalue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const focusedState = "drop-shadow-[0_0px_5px_#CB9EFF]";
  const inputRef = useRef(null);
  const {updateData} = useContext(DataContext)

  const SearchHandler = () => {
    fetchData(value).then(data=>updateData(data))
    setvalue((e) => {
      return "";
    });
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData(value).then(data=>updateData(data))
      e.preventDefault();
      e.target.blur();
      setvalue("");
    }
  };
  return (
    <div
      className={`bg-dark-color p-3 rounded-lg flex justify-between z-30 ${
        isFocused && focusedState
      }`}
    >
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-transparent w-full outline-none"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={inputRef}
        onFocus={() => {
          getFocus(true);
          setIsFocused((perv) => !perv);
        }}
        onBlur={() => {
          getFocus(false);
          setIsFocused((perv) => !perv);
        }}
      />
      <button
        className="bg-secondary-color text-dark-color p-2 text-sm rounded-md"
        onClick={SearchHandler}
      >
        Search/Enter
      </button>
    </div>
  );
}

export default SearchBar;
