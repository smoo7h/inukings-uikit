import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
<<<<<<< HEAD
    <Svg {...props}>
      <image width="64" height="32" href={`${process.env.PUBLIC_URL}/images/egg/LogoTextNewDark.png`} />
=======
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href={`${process.env.PUBLIC_URL}/images/egg/LogoTextNewDark.png`} />
>>>>>>> parent of 21161d0 (make logo wider)
    </Svg>
  );
};

export default Icon;
