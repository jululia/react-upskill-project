import { ThemeToggle } from "../components/Examples/ThemeToggle/ThemeToggle";
import { Examples } from "../components/Examples";
import { BarChartWrapper } from "../components/BarChartWrapper";

export const ExamplesPage = () => {
    return (
        <>
            <div className="intro"></div>
            <ThemeToggle />
            <BarChartWrapper />
            {/* <Examples /> */}
            <div className='bottom-space' />
            <p>That's it for now :)</p>
        </>
    )
}
