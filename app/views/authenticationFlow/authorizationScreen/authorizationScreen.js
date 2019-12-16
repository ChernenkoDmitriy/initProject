import React from 'react';
import { styles } from './styles';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthorizationScreen = (props) => {
    goToForgotPasswordScreen = () => {
        const { navigation } = props;
        navigation.navigate('ForgotPasswordScreen');
    };

    goToRegistrationScreen = () => {
        const { navigation } = props;
        navigation.navigate('RegistrationScreen');
    };

    signInAsync = async () => {
        const { navigation } = props;
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('App');
    }

    return (
        <View style={styles.container}>
            <Text>AuthorizationScreen</Text>
            <Button title="Show me ForgotPasswordScreen" onPress={goToForgotPasswordScreen} />
            <Button title="Show me RegistrationScreen" onPress={goToRegistrationScreen} />
            <Button title="Sign in!" onPress={signInAsync} />
        </View>
    );
}

export default AuthorizationScreen;