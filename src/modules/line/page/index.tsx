import { IData } from "../types";
import { Line } from "../containers/Line";
import { min, scaleLinear, scaleTime, extent } from "d3";

export const LineGraph = () => {
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const height = 500,
    width = 1000;
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  const junkData = [
    {
      visits: 59,
      timestamp: "Sun Jan 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 64,
      timestamp: "Mon Jan 02 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 55,
      timestamp: "Tue Jan 03 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 39,
      timestamp: "Wed Jan 04 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 8,
      timestamp: "Thu Jan 05 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 71,
      timestamp: "Fri Jan 06 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 41,
      timestamp: "Sat Jan 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 96,
      timestamp: "Sun Jan 08 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 2,
      timestamp: "Mon Jan 09 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 58,
      timestamp: "Tue Jan 10 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 84,
      timestamp: "Wed Jan 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 92,
      timestamp: "Thu Jan 12 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 66,
      timestamp: "Fri Jan 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 29,
      timestamp: "Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 68,
      timestamp: "Sun Jan 15 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 98,
      timestamp: "Mon Jan 16 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 16,
      timestamp: "Tue Jan 17 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 63,
      timestamp: "Wed Jan 18 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 85,
      timestamp: "Thu Jan 19 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 58,
      timestamp: "Fri Jan 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 74,
      timestamp: "Sat Jan 21 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 56,
      timestamp: "Sun Jan 22 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 73,
      timestamp: "Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 12,
      timestamp: "Tue Jan 24 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 60,
      timestamp: "Wed Jan 25 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 79,
      timestamp: "Thu Jan 26 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 56,
      timestamp: "Fri Jan 27 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 77,
      timestamp: "Sat Jan 28 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 17,
      timestamp: "Sun Jan 29 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
    {
      visits: 67,
      timestamp: "Mon Jan 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
  ];

  const data = junkData.map((x) => ({
    ...x,
    timestamp: new Date(x.timestamp),
  }));

  const xValue = (d: IData) => d.timestamp;
  const yValue = (d: IData) => d.visits;

  const minMaxY = extent(data, yValue) as [number, number];
  const yScale = scaleLinear([innerHeight, 0]).domain(minMaxY);

  const minMaxX = extent(data, xValue) as [Date, Date];
  const xScale = scaleTime([0, innerWidth]).domain(minMaxX);

  //   yScale.ticks().map((val) => console.log(yScale(val)));
  //   data.map((x) => console.log(xScale(xValue(x))));

  //   console.log(data.map((x) => xScale(new Date())));

  return (
    <Line
      innerHeight={innerHeight}
      innerWidth={innerWidth}
      margin={margin}
      data={data}
      xValue={xValue}
      yValue={yValue}
      xScale={xScale}
      yScale={yScale}
      height={height}
      width={width}
    />
  );
};
