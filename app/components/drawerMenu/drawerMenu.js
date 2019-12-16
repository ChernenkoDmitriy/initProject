import React from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const DrawerMenu = (props) => {
    signOutAsync = async () => {
        const { navigation } = props;
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };

    return (
        <View style={styles.container}>
            <Text>DrawerMenu</Text>
            <Button title="Actually, sign me out :)" onPress={signOutAsync} />
        </View>
    );
}

export default DrawerMenu;