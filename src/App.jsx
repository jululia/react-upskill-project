import { useState } from "react";
import { Logos } from "./components/Logos";
import { StaticComponent } from "./components/StaticComponent";
import { PropComponent } from "./components/PropComponent";
import { Component } from "./components/ComponentWithCss/Component";
import { PropComponentPropTypes } from "./components/PropComponentPropTypes";
import { TestComponent } from "./components/TestComponent";

export const App = () => {
  // Example of Reactive Data using react Hook useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Julia");

  // Function expression to showcase reactiveData in action
  const addOne = () => setCount((count) => count + 1);

  // Function expression to handle the input change and update the 'name' state to showcase how reactive data works in React through the use of hooks
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:"); // Show an alert to receive a value from the user
    if (newName) {
      setName(newName); // Update the name state with the new name if a value is provided
    }
  };

  // Staticc Data Inyected through {} reference
  const appContent = {
    heading: "All about the Sun",
    intro: "This app will show some interesting (and current) stats about the sun. Stay tuned for more!", 
    componentInfo:
      "Example components below. These will be removed later, but are good to keep as reference for now:",
  };
  return (
    <>
      {/* Component Example */}
      <Logos />
      <h1>{appContent.heading}</h1>
      <p>{appContent.intro}</p>
      <hr />
      <TestComponent />
      {/* <p>{appContent.reactivedataExampleThree}</p> */}
      <div className="card">
        <p>{appContent.componentInfo}</p>
        <button onClick={addOne}>count is {count}</button>
        <hr />
        <h3>{name}</h3>
        <button onClick={handleNameUpdate}>Change Name</button>
        <hr />
      </div>
      <div>
        <StaticComponent />
        <hr />
        <PropComponentPropTypes
          city="Stockholm"
          longitude={58.9}
          latitude={18}
          likesPizza={true}
        />
        <hr />
        <Component />
        <hr />
      </div>
    </>
  );
};
