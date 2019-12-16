import React from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';

export const HomeScreen = (props) => {
    goToSettingsScreen = () => {
        const { navigation } = props;
        navigation.navigate('SettingsScreen');
    };

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Show me SettingsScreen" onPress={goToSettingsScreen} />
        </View>
    );
}

export default HomeScreen;