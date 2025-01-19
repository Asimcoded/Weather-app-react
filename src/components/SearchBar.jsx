import React, { useContext, useEffect, useRef, useState } from "react";
function SearchBar() {
  const [value, setvalue] = useState("");
  const inputRef = useRef(null);
  
  const handlerChange = (e) => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    const input = inputRef.current
    input.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            setvalue("")
            console.log("Enter");
        }
    })
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
      <button className="bg-secondary-color text-dark-color p-2 text-sm rounded-md">
        Search/Enter
      </button>
    </div>
  );
}

export default SearchBar;
