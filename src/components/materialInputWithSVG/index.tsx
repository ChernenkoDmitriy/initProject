import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

interface MaterialInputWithSVG {
    value: String,
    onChangeText: Function,
    placeholder?: String,
    icon?: FC,
    isDark?: Boolean,
}

const ON_ACTICE_BG_LIGHT = 'rgba(220,220,220,0.5)';
const ON_INACTICE_BG_LIGHT = 'rgba(220,220,220,0.2)';
const PLACE_HOLDER_TEXT_COLOR_LIGHT = 'rgba(0,0,0,0.3)';
const TEXT_COLOR_LIGHT = 'rgba(0,0,0,1)';
const BORDER_COLOR_LIGHT = 'rgba(0,0,0,0.3)';

const ON_ACTICE_BG_DARK = 'rgba(255,255,255,0.3)';
const ON_INACTICE_BG_DARK = 'rgba(255,255,255,0.1)';
const PLACE_HOLDER_TEXT_COLOR_DARK = 'rgba(255,255,255,0.6)';
const TEXT_COLOR_DARK = 'rgba(255,255,255,1)';
const BORDER_COLOR_DARK = 'rgba(255,255,255,0.5)';

export const MaterialInputWithSVG: FC<MaterialInputWithSVG> = ({ value, onChangeText, placeholder, icon, isDark }) => {
    const [backgroundColor, setBackgroundColor] = useState(isDark ? ON_INACTICE_BG_DARK : ON_INACTICE_BG_LIGHT);

    const onFocus = () => {
        const color = isDark ? ON_ACTICE_BG_DARK : ON_ACTICE_BG_LIGHT;
        setBackgroundColor(color);
    }

    const onBlur = () => {
        const color = isDark ? ON_INACTICE_BG_DARK : ON_INACTICE_BG_LIGHT;
        setBackgroundColor(color);
    }

    return (
        <View style={[styles.container, { backgroundColor, borderColor: isDark ? BORDER_COLOR_DARK : BORDER_COLOR_LIGHT }]} >
            <TextInput
                placeholderTextColor={isDark ? PLACE_HOLDER_TEXT_COLOR_DARK : PLACE_HOLDER_TEXT_COLOR_LIGHT}
                style={[styles.textImput, { color: isDark ? TEXT_COLOR_DARK : TEXT_COLOR_LIGHT }]}
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