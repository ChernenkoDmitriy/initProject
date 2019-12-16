import React, { Component } from 'react';
import { View } from 'react-native';
import Utils from '../../../services/utils/utils';
import { styles } from './styles';
import { Dots } from './dots/dots';
import { FirstPage } from './pages/firstPage';
import { SecondPage } from './pages/secondPage';
import { AnimationCircles } from './animationCircles/animationCircles';
import Animated, { Easing } from 'react-native-reanimated';
import { ThirdPage } from './pages/thirdPage';
import { FourthPage } from './pages/fourthPage';
import Scientist from '../../../assets/svg/scientist';
import CurveLine from '../../../assets/svg/curveLine';
import { LineChart } from './animatedCharts/lineChart';

const { width } = Utils.size;
const { Extrapolate, interpolate } = Animated;

export class StartAnimation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1,
        }
        this.offsetX = new Animated.Value(0);
    }

    onScroll = (e) => {
        const { contentOffset } = e.nativeEvent;
        const { index } = this.state;
        const newIndex = Math.round((width + contentOffset.x) / width);
        if (index !== newIndex) {
            this.setState({ index: newIndex })
        }
    }

    render() {
        const { index } = this.state;
        return (
            <View style={styles.container}>
                {/* <Animated.ScrollView
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal
                    scrollEventThrottle={16}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.offsetX } } }],
                        { listener: event => { this.onScroll(event); } })}
                >
                    <FirstPage />
                    <SecondPage />
                    <ThirdPage />
                    <FourthPage />
                    <View style={{ width, height: '100%', backgroundColor: '#DAEDC2' }} />
                </Animated.ScrollView>
                <AnimationCircles {...{ offsetX: this.offsetX }} />
                <Animated.View style={{
                    position: 'absolute',
                    width: 150,
                    height: 10,
                    top: 200,
                    left: width / 2,
                    transform: [{
                        translateX: interpolate(this.offsetX, {
                            inputRange: [0, width * 2, width * 3, width * 4],
                            outputRange: [width, width * 6, 0, -width],
                            extrapolate: Extrapolate.CLAMP,
                        })
                    }]
                }}>
                    <Scientist />
                </Animated.View> */}
                <LineChart/>
                <Dots {...{ index }} />
            </View>
        )
    }
}

export default StartAnimation;