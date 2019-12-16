import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Utils from '../../../../services/utils/utils';
import CurveLine from '../../../../assets/svg/curveLine';
import Animated, { Easing } from 'react-native-reanimated';

const { timing, Value, multiply, Clock, startClock, clockRunning, stopClock, block, cond, set, debug } = Animated;

const { width } = Utils.size;

export class CurveLineChart extends Component {
    constructor(props) {
        super(props)
        this.translateX = new Value(0);
        this.clock = new Clock();
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
        const translateX = multiply(-1, this.runTiming(this.clock, 4, 40));
        return (
            <View style={styles.container}>
                <View style={styles.animatedWrapper}>
                    <Animated.View style={{ transform: [{ translateX }, { translateY: -4 }] }}>
                        <CurveLine height={40} width={120} />
                    </Animated.View>
                </View>
            </View>
        )
    }
}

export default CurveLineChart;

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