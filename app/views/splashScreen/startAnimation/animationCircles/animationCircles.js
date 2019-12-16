import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SecondCircle } from './secondCircle';
import { FirstCircle } from './firstCircle';
import { ThirdCircle } from './thirdCircle';
import Animated, { Easing } from 'react-native-reanimated';
import { FourthCircle } from './fourthCircle';
import { FifthCircle } from './fifthCircle';
const { Extrapolate, interpolate } = Animated;

export class AnimationCircles extends React.Component {
    constructor(props) {
        super(props)
    }

    getOpacity = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    render() {
        const { offsetX } = this.props;
        const opacity = this.getOpacity(offsetX);

        return (
            <Animated.View style={[styles.container, { opacity }]} pointerEvents="none">
                <FirstCircle {...{ offsetX }} />
                <SecondCircle {...{ offsetX }} />
                <ThirdCircle {...{ offsetX }} />
                <FourthCircle {...{ offsetX }} />
                <FifthCircle {...{ offsetX }} />
            </Animated.View>)
    }
}

export default AnimationCircles;

// import React from 'react';
// import { View } from 'react-native';
// import { styles } from './styles';
// import { SecondCircle } from './secondCircle';
// import { FirstCircle } from './firstCircle';
// import { ThirdCircle } from './thirdCircle';
// import Animated, { Easing } from 'react-native-reanimated';
// import { FourthCircle } from './fourthCircle';
// import { FifthCircle } from './fifthCircle';
// import Utils from '../../../../services/utils/utils';
// import { Circle } from './circle';

// const { Extrapolate, interpolate } = Animated;
// const { width, height } = Utils.size;

// const outputRangeTop = [
//     [80, 70, 60],
//     [height * 0.4, 70, 60],
//     [height * 0.5, 70, 60],
//     [height * 0.35, 210, 60],
//     [height * 0.2, 210, 60]
// ];
// const outputRangeLeft = [
//     [width * 7, 80, (width / 6), 60],
//     [width * 3, 50, (width / 3) + 35, 60],
//     [width * 3, width - 120, (width * 0.7), 60],
//     [width * 3, width - 100, width * 0.65 - 30, width * 0.7 - 30],
//     [width * 3, width - 180, width * 0.35 - 30, width * 0.7 - 30]
// ];
// const outputRangeScale = [
//     [0.7, 1, 1],
//     [1.1, 1, 1],
//     [0.7, 1, 1],
//     [0.7, 1, 1],
//     [1.2, 1, 1]
// ];
// const outputRangeOpacity = [0, 1];

// export class AnimationCircles extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     getOpacity = (offsetX) => {
//         return interpolate(offsetX, {
//             inputRange: [0, 1],
//             outputRange: [0, 1],
//             extrapolate: Extrapolate.CLAMP,
//         });
//     }

//     render() {
//         const { offsetX } = this.props;
//         const opacity = this.getOpacity(offsetX);

//         return (
//             <Animated.View style={[styles.container, { opacity }]} pointerEvents="none">
//                 <Circle {...{ offsetX, outputRangeOpacity, outputRangeTop: outputRangeTop[0], outputRangeLeft:outputRangeLeft[0], outputRangeScale:outputRangeScale[0] }} />
//                 <Circle {...{ offsetX, outputRangeOpacity, outputRangeTop: outputRangeTop[1], outputRangeLeft:outputRangeLeft[1], outputRangeScale:outputRangeScale[1] }} />
//                 <Circle {...{ offsetX, outputRangeOpacity, outputRangeTop: outputRangeTop[2], outputRangeLeft:outputRangeLeft[2], outputRangeScale:outputRangeScale[2] }} />
//                 <Circle {...{ offsetX, outputRangeOpacity, outputRangeTop: outputRangeTop[3], outputRangeLeft:outputRangeLeft[3], outputRangeScale:outputRangeScale[3] }} />
//                 <Circle {...{ offsetX, outputRangeOpacity, outputRangeTop: outputRangeTop[4], outputRangeLeft:outputRangeLeft[4], outputRangeScale:outputRangeScale[4] }} />
//             </Animated.View>)
//     }
// }

// export default AnimationCircles;