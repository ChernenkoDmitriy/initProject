import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Utils from '../../../../services/utils/utils';
import Dna from '../../../../assets/svg/dna';

const { width, height } = Utils.size;
const { Extrapolate, interpolate } = Animated;

export class SecondCircle extends React.Component {
    constructor(props) {
        super(props)
    }

    getTop = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [width, width * 2, width * 3],
            outputRange: [height * 0.4, 70, 150],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    getLeft = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [width * 3, 50, (width / 3) + 35, 60,-(width-60)],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    getScale = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [width, width * 2, width * 3],
            outputRange: [1.1, 1, 0.6],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    getOpacity = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [width, width * 2],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    getTranslateY = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [width * 2, width * 3],
            outputRange: [0, -56],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    getTranslateX = (offsetX) => {
        return interpolate(offsetX, {
            inputRange: [width * 2, width * 3],
            outputRange: [0, 90],
            extrapolate: Extrapolate.CLAMP,
        });
    }

    render() {
        const { offsetX } = this.props;
        const top = this.getTop(offsetX);
        const left = this.getLeft(offsetX);
        const scale = this.getScale(offsetX);
        const opacity = this.getOpacity(offsetX);

        const translateY = this.getTranslateY(offsetX);
        const translateX = this.getTranslateX(offsetX);
        return (
            <Animated.View style={[styles.container, { top, left, transform: [{ scale }] }]}>
                <Animated.View style={styles.circle}>
                    <Dna />
                </Animated.View>
                <Animated.View style={[styles.chart, { opacity, transform: [{ translateY }, { translateX }] }]} >
                    <Animated.View style={styles.greyLine}>
                        <Animated.View style={styles.colorLine} />
                    </Animated.View >
                </Animated.View >
            </Animated.View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 105,
        position: 'absolute',
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: '#d9a114',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chart: {
        marginTop: 10,
        height: 35,
        width: 60,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    greyLine: {
        width: '100%',
        height: 8,
        backgroundColor: '#b8b8b8',
    },
    colorLine: {
        width: 40,
        height: '100%',
        backgroundColor: '#d9a114',
    }
});

export default SecondCircle;