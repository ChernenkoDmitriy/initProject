import React from 'react';
import { styles } from './styles';
import { Button, View, Text } from 'react-native';

export const ForgotPasswordScreen = (props) => {
    goToAuthorizationScreen = () => {
        const { navigation } = props;
        navigation.navigate('AuthorizationScreen');
    };

    return (
        <View style={styles.container}>
            <Text>ForgotPasswordScreen</Text>
            <Button title="Show me AuthorizationScreen" onPress={this.goToAuthorizationScreen} />
        </View>
    );
}

export default ForgotPasswordScreen;