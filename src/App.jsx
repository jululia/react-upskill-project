import { Header } from "./components/Layout/Header";
import { Intro } from "./components/Layout/Intro";
import { Container } from "./components/Layout/Container";
//import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
//import { Examples } from "./components/Examples";

import { BarChartWrapper } from "./components/BarChartWrapper";

export const App = () => {

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
      <BarChartWrapper />
      <div className='bottom-space' />
      <p>That's it for now :)</p>
      
    </>
  );
};
