import React, { useContext, useEffect, useRef, useState } from "react";
function SearchBar({getFocus}) {
  const [value, setvalue] = useState("");
  const inputRef = useRef(null);
  const handlerChange = (e) => {
    setvalue(e.target.value);
  };
  const SearchHandler = ()=>{
    setvalue(e=>{
      return ""
    });
  }
  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setvalue(e=>{
          return ""
        });
        console.log("Enter");
      }
    });
  }, []);

  return (
    <div className="bg-dark-color p-3 rounded-lg flex justify-between z-30">
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-transparent w-full outline-none"
        value={value}
        onChange={handlerChange}
        ref={inputRef}
        onFocus={()=>getFocus(true)}
        onBlur={()=>getFocus(false)}
      />
      <button className="bg-secondary-color text-dark-color p-2 text-sm rounded-md" onClick={SearchHandler}>
        Search/Enter
      </button>
    </div>
  );
}

export default SearchBar;
