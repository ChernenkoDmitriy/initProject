import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path, } from "react-native-svg";
import Animated, { Easing } from "react-native-reanimated";
import { interpolatePath } from "react-native-redash";

const { timing, Value, multiply, Clock, startClock, clockRunning, stopClock, block, cond, set, interpolate, Extrapolate } = Animated;
const AnimatedPath = Animated.createAnimatedComponent(Path);

export class LineChart extends Component {
    constructor(props) {
        super(props)
        this.value = new Value(0);
        this.clock = new Clock();
    }

    interpolateY = (outputRange) => {
        return interpolate(this.value, { inputRange: [0, 0.5, 1], outputRange, extrapolate: Extrapolate.CLAMP });
    }

    runTiming = (clock, value, dest) => {
        const state = {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: 2500,
            toValue: new Value(0),
            easing: Easing.linear,
        };

        return block([
            cond(clockRunning(clock), [
                // if the clock is already running we update the toValue, in case a new dest has been passed in
                set(config.toValue, dest),
            ], [
                    // if the clock isn't running we reset all the animation params and start the clock
                    set(state.finished, 0),
                    set(state.time, 0),
                    set(state.position, value),
                    set(state.frameTime, 0),
                    set(config.toValue, dest),
                    startClock(clock),
                ]),
            // we run the step here that is going to update position
            timing(clock, state, config),
            // if the animation is over we stop the clock
            cond(state.finished, [
                // we stop
                stopClock(clock),

                // set flag ready to be restarted
                set(state.finished, 0),
                // same value as the initial defined in the state creation
                set(state.position, 4),

                // very important to reset this ones !!! as mentioned in the doc about timing is saying
                set(state.time, 0),
                set(state.frameTime, 0),

                // and we restart
                startClock(clock),
            ]),
            // we made the block return the updated position
            state.position,
        ]);
    }

    render() {
        // const d = this.runTiming(this.clock, 'M0 25 L30 40 L60 5 L80 30 L120 10 L160 35 L180 2 L200 25', 'M0 25 L30 40 L60 5 L80 30 L120 10 L160 35 L180 2 L200 25')
        const d = interpolatePath(this.value , {
            inputRange: [0, 1],
            outputRange: ['M0 25 L30 40 L60 5 L80 30 L120 10 L160 35 L180 2 L200 25', 'M0 25 L30 40 L60 5 L80 30 L120 10 L160 35 L180 2 L200 25'],
            extrapolate: Extrapolate.CLAMP,
        });

        return (
            <View style={styles.container} >
                <Svg width={200} height={100} viewBox="0 0 200 50">
                    <AnimatedPath
                        stroke="red"
                        fill="none"
                        d={d}
                    />
                </Svg>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedWrapper: {
        height: 40,
        width: 60,
        overflow: 'hidden',
    }
});
export default LineChart;