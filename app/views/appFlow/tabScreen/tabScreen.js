import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';

export const TabScreen = (props) => {
    goToChartScreen = () => {
        const { navigation } = props;
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Text>TabScreen</Text>
        </View>
    );
}

export default TabScreen;