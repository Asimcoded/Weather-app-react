import React, { useEffect, useRef, useState } from "react";
function SearchBar({ getFocus }) {
  const [value, setvalue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const focusedState = "drop-shadow-[0_0px_5px_#CB9EFF]";
  const inputRef = useRef(null);
  const handlerChange = (e) => {
    setvalue(e.target.value);
  };
  const SearchHandler = () => {
    setvalue((e) => {
      return "";
    });
  };
  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        input.blur();
        setvalue((e) => {
          return "";
        });
      }
    });
  }, []);

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
        onChange={handlerChange}
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
