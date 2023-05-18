import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props}>
      <image width="64" height="32" href={`${process.env.PUBLIC_URL}/images/egg/LogoTextNewDark.png`} />
    </Svg>
  );
};

export default Icon;
