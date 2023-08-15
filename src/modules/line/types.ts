import { ScaleLinear, ScaleTime } from "d3";

export {};

export interface IData {
  visits: number;
  timestamp: Date;
}

export interface IMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IXValue {
  (x: IData): Date;
}

export interface IYValue {
  (x: IData): number;
}

export interface ILineGraph {
  margin: IMargin;
  xValue: IXValue;
  yValue: IYValue;
  data: IData[];
  innerHeight: number;
  innerWidth: number;
  height: number;
  width: number;
  xScale: ScaleTime<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
}
