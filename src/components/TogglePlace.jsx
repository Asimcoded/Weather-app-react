import React, { useState } from "react";

function TogglePlace({ title, desc, changeFunction }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex justify-between">
      <div>
        <h2>{title}</h2>
        <p className="text-sm text-grey">{desc}</p>
      </div>
      <div className="flex items-center justify-center ">
        <button
          onClick={() => {
            toggle()
            changeFunction()
          }}
          className={`relative w-14 h-6 rounded-full transition-colors duration-300 ${
            isOn ? "bg-primary-color" : "bg-bg-color"
          }`}
        >
          <span
            className={`absolute w-5 h-5 top-[2px] left-[8px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-6" : "translate-x-[-5px]"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default TogglePlace;
