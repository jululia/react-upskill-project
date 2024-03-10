import { useState } from "react";
import { StaticComponent } from "./StaticComponent" 
import { PropComponentPropTypes } from "./PropComponentPropTypes"
import { Component } from "./ComponentWithCss/Component"
import { DataParent } from "./Examples/DataTypesExamplesAsProps/DataParent"


 

export const Examples = () => {

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
    heading: "All about the sun",
    componentInfo: "Example components below. These will be removed later, but are probably good to keep as reference for now:",
  };

    return (
    <div className="examples">
    <h2>Example components</h2>
    <p>{appContent.componentInfo}</p>
    <div className="card">
      <h3>Example 1:</h3>
      <p>Example of using react Hook useState.</p>
      <button onClick={addOne}>count is {count}</button>
    </div>
    <div className="card">
      <h3>Example 2:</h3>
      <p>Another example of using react Hook useState.</p>
      <h4>{name}</h4>
      <button onClick={handleNameUpdate}>Change Name</button>
    </div>
    <div>
      <div className="card">
        <h3>Example 3:</h3>
        <p>Example of static component.</p>
        <StaticComponent />
      </div>
      <div className="card" >
        <h3>Example 4: </h3>
        <p>Making use of props, building the same component over and over but with different intput variables/props.</p>
        <div className="card-container">
          <PropComponentPropTypes
            city="Stockholm"
            longitude={59.334591}
            latitude={18.063240}
            likesPizza={true}
          />
          <PropComponentPropTypes
            city="Gothenburg"
            longitude={11.974560}
            latitude={57.708870}
            likesPizza={true}
          />
          <PropComponentPropTypes
            city="Barcelona"
            longitude={2.154007}
            latitude={41.390205}
            likesPizza={false}
          />
          <PropComponentPropTypes
            city="Nice"
            longitude={7.289429}
            latitude={43.675819}
            likesPizza={false}
          />
        </div>
      </div>
      <div className="card">
        <h3>Example 5:</h3>
        <p>Example of using custom styling for a specific component.</p>
        <Component />
      </div>
      <div className="card">
        <h3>Example 6:</h3>
        <p>Example of using a parent component width many children.</p>
        <DataParent />
      </div>
    </div>
  </div>
  )
}
