import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
    navigation?: any;
}

const TeamGroupView: FC<Props> = ({ params }) => {
    return (
        <View style={styles.container}>
            <Text>TeamGroupView</Text>
        </View>
    )
};

export default TeamGroupView;
