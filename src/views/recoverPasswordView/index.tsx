import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
    navigation?: any;
}

const RecoverPasswordView: FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>recoverPasswordView</Text>
        </View>
    )
};

export default RecoverPasswordView;
