import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
    navigation?: any;
}

const SquareButton: FC<Props> = ({ params }) => {
    return (
        <View style={styles.container}>
            <Text>HomeView</Text>
        </View>
    )
};

export default SquareButton;
