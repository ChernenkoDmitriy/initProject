import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
    navigation?: any;
}

const RegistrationView: FC<Props> = ({ params }) => {
    return (
        <View style={styles.container}>
            <Text>RegistrationView</Text>
        </View>
    )
};

export default RegistrationView;
