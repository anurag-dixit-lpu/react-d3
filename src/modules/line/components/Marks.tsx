import { FC } from "react";
import { IData, ILineGraph } from "../types";
import { line, curveBasis } from "d3";

export const Marks: FC<ILineGraph> = ({
  xScale,
  yScale,
  xValue,
  yValue,
  data,
}) => {
  const path = line<any>()
    .curve(curveBasis)
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))(data);

  return <g className="marks-line">{path && <path d={path} />}</g>;
};
