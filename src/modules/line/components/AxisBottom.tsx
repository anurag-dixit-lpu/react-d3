import { FC } from "react";
import { ILineGraph } from "../types";
import { timeFormat } from "d3";

export const AxisBottom: FC<ILineGraph> = ({ xScale, innerHeight }) => {
  return (
    <>
      {xScale.ticks().map((value, index) => (
        <g
          transform={`translate(${xScale(value)}, 0)`}
          key={index}
          className="axis-bottom"
        >
          <line y2={innerHeight} />
          <text y={innerHeight + 20}>{timeFormat("%b %d")(value)}</text>
        </g>
      ))}
    </>
  );
};
