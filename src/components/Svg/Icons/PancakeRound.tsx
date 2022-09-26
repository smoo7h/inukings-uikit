/* eslint-disable prefer-template */
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href={process.env.PUBLIC_URL + "/images/egg/9.png"} />
    </Svg>
  );
};

export default Icon;
