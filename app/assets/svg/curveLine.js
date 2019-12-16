import React from "react";
import Svg, { Path } from "react-native-svg";

const CurveLine = ({ width, height }) => (
    <Svg width={width || 540} height={height || 180} viewBox="0 0 540 180">
        <Path d="M10 80 Q 52.5 10, 95 80 T 180 80 Q 222.5 10, 265 80 T  350 80  Q 392.5 10, 435 80 T  530 80" stroke="red" strokeWidth='4' fill="transparent" />
    </Svg>
);

export default CurveLine;
