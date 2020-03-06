import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinklButton } from '../linkButton/linkButton';
import Checked from '../../assets/svg/checked';

interface AgreementButton {
    text: String,
    navigateToAgreementView: Function,
    onPressCheckBox: Function,
    isDark?: Boolean,
}

export const AgreementButton: FC<AgreementButton> = ({ navigateToAgreementView, text, isDark, onPressCheckBox }) => {
    const [isPresed, setIsPresed] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const onPress = () => {
        setIsChecked(state => !state);
        onPressCheckBox();
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
                onPress={onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}>
                <View style={[styles.highlightContainer, { backgroundColor: isPresed ? 'rgba(180,180,180,0.2)' : 'transparent' }]}>
                    <View style={[styles.checkBoxContainer, {
                        backgroundColor:
                            isChecked ? 'rgba(28,43,214,0.9)' :
                                isPresed ? 'rgba(28,43,214,0.3)' :
                                    'rgba(180,180,180,0.2)',
                        borderColor: isChecked ?
                            'rgba(28,43,214,0.9)' :
                            isPresed ? 'rgba(28,43,214,0.9)' :
                                'rgba(200,200,200,0.9)',
                    }]}>
                        {isChecked ? <Checked color='#FFFFFF' width={14} height={14} /> : null}
                    </View>
                </View>
            </TouchableOpacity>
            <LinklButton onPress={navigateToAgreementView} title={text} isDark={isDark} />
        </View >
    );
};