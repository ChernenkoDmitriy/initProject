import React, { FC } from 'react';
import { Text, TouchableOpacity, T } from 'react-native';
import { styles } from './styles';

interface MaterialButtonProps {
    title: String,
    onPress: Function,
}

export const MaterialButton: FC<MaterialButtonProps> = ({ onPress, title = '' }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};