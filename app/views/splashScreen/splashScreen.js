import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { StartAnimation } from './startAnimation/startAnimation';

export const SplashScreen = (props) => {
    useEffect(() => {
        _bootstrapAsync();
    }, []);

    _bootstrapAsync = async () => {
        const { navigation } = props;
        const userToken = await AsyncStorage.getItem('userToken');
        setTimeout(() => {
            navigation.navigate(userToken ? 'App' : 'Auth');
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text>Hello SplashScreen</Text>
            {/* <StartAnimation /> */}
        </View>
    );
}

export default SplashScreen;