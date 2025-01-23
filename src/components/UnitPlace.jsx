import React, { useEffect, useState } from "react";

function UnitPlace({ title, label, changeFunction }) {
  const activeState =
    "w-full bg-secondary-color text-dark-color p-2 rounded-md transition-all duration-200";
  const inactiveState = "w-full p-2 rounded-md transition-all duration-200";
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleClick = (componentName) => {
    setSelectedComponent(componentName);
    changeFunction(componentName)
  };

  return (
    <div className="">
      <h2 className="text-grey">{title}</h2>
      <div className="bg-bg-color p-2 rounded-md flex justify-evenly gap-2">
        {label.map((e, i) => {
            if(i == 0){
                useEffect(() => {
                    handleClick(e)
                }, [])
            }
          return <button
            className={selectedComponent === e ? activeState : inactiveState}
            onClick={() => handleClick(e)}
            key={i}
          >
            {e}
          </button>;
        })}
      </div>
    </div>
  );
}

export default UnitPlace;
