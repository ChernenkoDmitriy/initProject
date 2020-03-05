import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface BrightnessIconProps {
  width?: Number,
  height?: Number,
  color?: String,
};

const BrightnessIcon: FC<BrightnessIconProps> = ({ width, color, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={color || "#000000"} d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
  </Svg>
);

export default BrightnessIcon;
