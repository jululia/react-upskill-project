import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import { Examples } from "../components/Examples";
import { BarChartWrapper } from "../components/BarChartWrapper";

export const ExamplesPage = () => {
    return (
        <>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iste cum veritatis minima maxime impedit assumenda, voluptate sint excepturi neque quo sequi repellat, esse corporis nihil, animi necessitatibus officiis repudiandae.
            <ThemeToggle />
            <BarChartWrapper />
            {/* <Examples /> */}
            <div className='bottom-space' />
            <p>That's it for now :)</p>
        </>
    )
}
