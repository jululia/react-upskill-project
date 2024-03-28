import { ThemeToggle } from "../components/Examples/ThemeToggle/ThemeToggle";
import { Examples } from "../components/Examples";
import { BarChartWrapper } from "../components/BarChartWrapper";
import "../components/styles.css";

export const ExamplesPage = () => {
    return (
        <>
        <div className="wrapper">
            <div className="intro"></div>
            <Examples />
            <h3>Example 7:</h3>
      <p>Example of using a dark and light theme.</p>
            <ThemeToggle />
            <h3>Example 8:</h3>
      <p>Example of using D3.js with react.</p>
            <BarChartWrapper />
            
            <div className='bottom-space' />
            <p>That's it for now :)</p>
            </div>
        </>
    )
}
