import { useRef, useEffect } from "react";
import * as d3 from "d3";

export const BarChartD3 = ({ data , height, width}) => {
  const ref = useRef();
  const marginTop = 60;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 50;

  useEffect(() => {
    const svg = d3.select(ref.current).select('.chart-area');

    const xScale = d3.scaleBand()
                     .domain(data.map((d) => d.name))
                     .range([marginLeft, width-marginRight])
                     .padding(0.2);
                     
    const yScale = d3.scaleLinear()
                     .domain([0, 50])
                     .range([height-marginBottom, marginTop]);  
    
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.select(".x-axis")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .transition()
       .duration(500)
       .call(xAxis);
       
    svg.select(".y-axis")
    .attr("transform", `translate(${marginLeft},0)`)
       .transition()
       .duration(500)
       .call(yAxis);

    svg.selectAll(".bar")
       .data(data)
       .join("rect")
       .attr("class", "bar")
       .transition()
       .duration(200)
       .attr("x", (data) => xScale(data.name))
       .attr("y", (data) => yScale(data.value))
       .attr("width", xScale.bandwidth())
       .attr("height", (data) => yScale(0) - yScale(data.value));

  }, [data]);

  return (
    <svg ref={ref} style={{backgroundColor: 'white',overflow: 'visible', height: `${outerHeight}px`, width: `${outerWidth}px`}}>
      <g className="chart-area">
        <g className="x-axis" />
        <g className="y-axis" />
      </g>
    </svg>
  );
};