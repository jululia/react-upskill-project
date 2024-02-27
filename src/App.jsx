import { useState } from "react";
import { Logos } from "./components/Logos";
import { StaticComponent } from "./components/StaticComponent";
import { PropComponent } from "./components/PropComponent";
import { Component } from "./components/ComponentWithCss/Component";
import { PropComponentPropTypes } from "./components/PropComponentPropTypes";
import { TestComponent } from "./components/TestComponent";
import {DataParent} from "./components/Examples/DataTypesExamplesAsProps/DataParent";
import { Header } from "./components/Layout/Header";

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
    heading: "All about the sun",
    intro: "Hi, I'm Julia and I am about to build an app which shows some interesting (and up-to-date) stats about the sun, such as when the sunrise and sunset is in different parts of the world. The reason I am building this app is to learn the concepts of React. React is a javacript framework which is very popular for building web apps. To start with, I made it so that it provides the sunset time for Stockholm, which you can see below.", 
    outro: "The timestamp is sourced from a real-time API and will change on a daily basis. So if you check in tomorrow again, it will show a new time. Pretty cool right 😉", 
    componentInfo:
      "Example components below. These will be removed later, but are probably good to keep as reference for now:",
  };
  return (
    <>
    <Header />
      {/* Component Example */}
      <div style={{height: '430px'}}></div>

      <p>{appContent.intro}</p>
      <TestComponent />
      <p>{appContent.outro}</p>
      
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
    </>
  );
};
