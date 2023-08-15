import React, { FC } from "react";
import { ILineGraph } from "../types";
import { StyledSvg } from "../page/styled";

export const SVG: FC<ILineGraph & { children: React.ReactElement }> = ({
  height,
  width,
  children,
  margin,
}) => {
  return (
    <StyledSvg $height={height} $width={width}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
    </StyledSvg>
  );
};
