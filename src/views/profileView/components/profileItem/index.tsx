import React, { FC } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from './styles';

interface ProfileItemProps {
    icon?: FC,
    rightElement?: FC,
    onPress: Function,
    text: String,
    isDark?: Boolean
    disabled?: Boolean
}

export const ProfileItem: FC<ProfileItemProps> = ({ text, onPress, icon, isDark, rightElement, disabled }) => {
    return (
        <TouchableHighlight disabled={disabled} style={styles.container} onPress={onPress} underlayColor={isDark ? 'rgba(256,256,256,0.05)' : 'rgba(30,30,30,0.05)'}>
            <>
                {
                    icon ? <View style={styles.iconWrapper} >
                        {icon}
                    </View > : null
                }
                <Text style={[styles.text, { color: isDark ? '#FFFFFF' : '#000000' }]}>{text}</Text>
                {
                    rightElement ? <View style={styles.iconWrapper} >{rightElement}</View> : null
                }
            </>
        </TouchableHighlight >
    );
};