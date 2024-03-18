import { Header } from "./components/Layout/Header";
import { Intro } from "./components/Layout/Intro";
import { Container } from "./components/Layout/Container";
//import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
//import { Examples } from "./components/Examples";
import { BarChartD3 } from "./components/BarChartD3";
import { useState } from "react";

export const App = () => {

  // Sample data
  const sampleData1 = [
    { name: 'A', value: 20 },
    { name: 'B', value: 25 },
    { name: 'C', value: 30 },
    { name: 'D', value: 50 },
    { name: 'E', value: 10 },
 ];

 const sampleData2 = [
   { name: 'F', value: 15 },
   { name: 'G', value: 35 },
   { name: 'H', value: 45 },
   { name: 'I', value: 10 },
   { name: 'J', value: 20 },
 ];

 const [data, setData] = useState(sampleData1); // initialise with sampleData1




// Usage

  return (
    <>
      <Header
        initialHeightOfParentDiv={430}
        finalHeightOfParentDiv={70}
        initialSizeSun={250} />
      <Intro className="intro"/>
      <Container />
      {/* <ThemeToggle /> */}
      {/* <Examples /> */}
      
      <button onClick={() => setData(sampleData1)}>
        Load Sample Dataset 1
      </button>
      <button onClick={() => setData(sampleData2)}>
        Load Sample Dataset 2
      </button>
      <BarChartD3 data={data} height = {400} width = {350} />
      <div className='bottom-space' />
      <p>That's it for now :)</p>
      
    </>
  );
};
