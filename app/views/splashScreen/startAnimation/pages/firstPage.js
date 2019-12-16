import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Utils from '../../../../services/utils/utils';

const { width } = Utils.size;

export class FirstPage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Image style={styles.img} source={require('../assets/img/logo.jpg')} />
                    <Text style={styles.labelText}>ELEVATE</Text>
                    <Text style={styles.text}>PERSONALIZED BRAIN TRAINING</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>SWIPE TO BEGIN</Text>
                </View>
            </View>
        )
    }
}

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'stretch'
    },
    labelText: {
        color: '#000000',
        fontSize: 24,
        letterSpacing: 8,
    },
    text: {
        fontWeight: 'bold',
        color: '#B5B6B0',
        fontSize: 14,
        marginTop: 10,
    },
    bottom: {
        alignItems: 'center',
        height: 70,
    },
    bottomText:{
        color: '#B5B6B0',
        fontSize: 10,
        marginTop: 10, 
    },
});