import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export class Dots extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { index } = this.props;
        return (
            <View style={styles.container} >
                <View style={[styles.dot, { backgroundColor: index === 1 ? '#2DB4F7' : '#B5B6B0' }]} />
                <View style={[styles.dot, { backgroundColor: index === 2 ? '#2DB4F7' : '#B5B6B0' }]} />
                <View style={[styles.dot, { backgroundColor: index === 3 ? '#2DB4F7' : '#B5B6B0' }]} />
                <View style={[styles.dot, { backgroundColor: index === 4 ? '#2DB4F7' : '#B5B6B0' }]} />
                <View style={[styles.dot, { backgroundColor: index === 4 ? '#2DB4F7' : '#B5B6B0' }]} />
            </View>)
    }
}

export default Dots;