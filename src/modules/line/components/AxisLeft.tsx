import { FC } from "react";
import { ILineGraph } from "../types";

export const AxisLeft: FC<ILineGraph> = ({ yScale, innerWidth }) => {
  return (
    <>
      {yScale.ticks().map((value, index) => (
        <g
          transform={`translate(0, ${yScale(value)})`}
          key={index}
          className="axis-left"
        >
          <line x2={innerWidth} />
          <text x={-10} dy="0.31em">
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
