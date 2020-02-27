import React, { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

interface LinklButtonProps {
    title?: String,
    onPress?: Function,
}

export const LinklButton: FC<LinklButtonProps> = ({ onPress, title = '' }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={'rgba(256,256,256,0.05)'}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
};