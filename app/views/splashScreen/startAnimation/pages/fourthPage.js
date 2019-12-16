import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Utils from '../../../../services/utils/utils';

const { width, height } = Utils.size;

export class FourthPage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Image style={styles.img} source={require('../../../../assets/img/board.png')} />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.labelText}>Improve your skills</Text>
                    <Text style={styles.text}>Train using 35+ games that improve your writing, speaking, reading, and everyday math skill.</Text>
                </View>
            </View>
        )
    }
}

export default FourthPage;

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    center: {
        width,
        height: height / 2,
        paddingTop: 100,
        alignItems: 'center',
    },
    img: {
        width: 320,
        height: 180,
        resizeMode: 'stretch',
    },
    labelText: {
        color: '#000000',
        fontSize: 18,
    },
    text: {
        color: '#B5B6B0',
        fontSize: 12,
        marginTop: 25,
        width: 240,
        textAlign: 'center',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});