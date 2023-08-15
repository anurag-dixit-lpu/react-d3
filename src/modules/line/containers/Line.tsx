import { FC } from "react";
import { SVG } from "../components/Svg";
import { ILineGraph } from "../types";
import { AxisLeft } from "../components/AxisLeft";
import { AxisBottom } from "../components/AxisBottom";
import { Marks } from "../components/Marks";

export const Line: FC<ILineGraph> = (props) => {
  return (
    <SVG {...props}>
      <>
        <AxisLeft {...props} />
        <AxisBottom {...props} />
        <Marks {...props} />
      </>
    </SVG>
  );
};
