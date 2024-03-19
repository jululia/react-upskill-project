import { BarChartD3 } from "./BarChartD3";
import { useState } from "react";

export const BarChartWrapper = () => {
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
    return (
        <>
            <BarChartD3 data={data} height={250} width={300} />
            <button onClick={() => setData(sampleData1)}>
                Load Sample Dataset 1
            </button>
            <button onClick={() => setData(sampleData2)}>
                Load Sample Dataset 2
            </button>

        </>
    )
}
