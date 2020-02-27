import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

interface MaterialInputWithSVG {
    value: String,
    onChangeText: Function,
    placeholder?: String,
    icon?: FC,
}

const ON_ACTICE_BG = 'rgba(255,255,255,0.3)';
const ON_INACTICE_BG = 'rgba(255,255,255,0.1)';
const PLACE_HOLDER_TEXT_COLOR = 'rgba(255,255,255,0.6)';

export const MaterialInputWithSVG: FC<MaterialInputWithSVG> = ({ value, onChangeText, placeholder, icon }) => {
    const [backgroundColor, setBackgroundColor] = useState(ON_INACTICE_BG);

    const onFocus = () => {
        setBackgroundColor(ON_ACTICE_BG);
    }

    const onBlur = () => {
        setBackgroundColor(ON_INACTICE_BG);
    }

    return (
        <View style={[styles.container, { backgroundColor }]} >
            <TextInput
                placeholderTextColor={PLACE_HOLDER_TEXT_COLOR}
                style={styles.textImput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {
                icon ? <View style={styles.iconWrapper} >
                    {icon}
                </View > : null
            }
        </View>
    );
};