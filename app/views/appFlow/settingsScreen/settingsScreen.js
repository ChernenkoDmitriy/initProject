import React from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';

export const SettingsScreen = (props) => {
    goToChartScreen = () => {
        const { navigation } = props;
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
            <Button title="Show me HomeScreen" onPress={goToChartScreen} />
        </View>
    );
}

export default SettingsScreen;