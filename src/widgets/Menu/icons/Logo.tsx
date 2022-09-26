/* eslint-disable prefer-template */
import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image
        width="205"
        height="26"
        href={
          isDark
            ? process.env.PUBLIC_URL + "/images/egg/LogoTextNewDark.png"
            : process.env.PUBLIC_URL + "/images/egg/LogoTextNewWhite.png"
        }
      />
    </Svg>
  );
};

export default Logo;
