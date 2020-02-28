import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinklButton } from '../linkButton/linkButton';
import Checked from '../../assets/svg/checked';

interface AgreementButton {
    text: String,
    navigateToAgreementView: Function,
    onPressChackBox: Function,
    isDark?: Boolean,
}

export const AgreementButton: FC<AgreementButton> = ({ navigateToAgreementView, text, isDark, onPressChackBox }) => {
    const [isPresed, setIsPresed] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const onPress = () => {
        setIsChecked(state => !state);
        onPressChackBox();
    }

    const onPressIn = () => {
        setIsPresed(true);
    }

    const onPressOut = () => {
        setIsPresed(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1.0}
                // hitSlop={hitSlopInsets}
                onPress={onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}>
                <View style={[styles.highlightContainer, { backgroundColor: isPresed ? 'rgba(100,100,100,0.5)' : 'transparent' }]}>
                    <View style={[styles.checkBoxContainer, {
                        backgroundColor: isChecked ? 'rgba(28,43,214,0.9)' :
                            isPresed ? 'rgba(100,100,100,0.5)' : 'rgba(100,100,100,0)',
                        borderColor: isPresed ? 'rgba(28,43,214,0.9)' : 'rgba(100,100,100,0)'
                    }]}>
                        {isChecked ? <Checked /> : null}
                    </View>
                </View>
            </TouchableOpacity>
            <LinklButton onPress={navigateToAgreementView} title={text} isDark={isDark} />
        </View >
    );
};