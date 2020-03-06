import React, { FC } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { ColorsProps } from '../../../../config';

interface ChatItemProps {
    onPress: Function,
    icon?: FC,
    colors: ColorsProps,
    isDark?: any,
    text: string,
}

export const ChatItem: FC<ChatItemProps> = ({ icon, onPress, colors, isDark, text }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={isDark ? 'rgba(256,256,256,0.05)' : 'rgba(30,30,30,0.05)'}>
            <>
                <View style={styles.iconWrapper} >
                    {icon ? { icon } : null}
                </View >
                <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
            </>
        </TouchableHighlight >
    );
};