import React, { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

interface LinklButtonProps {
    title: String,
    onPress: Function,
    isDark?: Boolean,
}

export const LinklButton: FC<LinklButtonProps> = ({ onPress, isDark, title = '' }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={isDark ? 'rgba(256,256,256,0.05)' : 'rgba(30,30,30,0.05)'}>
            <Text style={[styles.text, { color: isDark ? '#FFFFFF' : '#000000' }]}>{title}</Text>
        </TouchableHighlight>
    );
};