import { styled } from "styled-components";

export const StyledSvg = styled.svg<{ $height: number; $width: number }>`
  height: ${({ $height }) => `${$height}px`};
  width: ${({ $width }) => `${$width}px`};
  border: 1px solid #d9d9d9;
  box-sizing: border-box;

  .marks-line path {
    fill: none;
    stroke-width: 2px;
    stroke: #d9d9d9;
  }

  .axis-left line {
    stroke: #d9d9d9;
  }

  .axis-bottom line {
    stroke: #d9d9d9;
  }
`;
