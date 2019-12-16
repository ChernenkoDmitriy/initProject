import React from 'react';
import { styles } from './styles';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const RegistrationScreen = (props) => {
    goToAuthorizationScreen = () => {
        const { navigation } = props;
        navigation.navigate('AuthorizationScreen');
    };

    signInAsync = async () => {
        const { navigation } = props;
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('App');
    }

    return (
        <View style={styles.container}>
            <Text>RegistrationScreen</Text>
            <Button title="Show me AuthorizationScreen" onPress={goToAuthorizationScreen} />
            <Button title="Actually, sign me in :)" onPress={signInAsync} />
        </View>
    );
}

export default RegistrationScreen;