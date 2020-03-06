import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const getStyle = (colors: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'space-around',
        },
        inputsWrapper: {
            height: 240,
            justifyContent: 'space-around',
        },
        buttonsWrapper: {
            height: 90,
            justifyContent: 'space-around',
        },
        forgotPassWrapper: {
            height: 35,
            flexDirection: 'row',
        },
        textAccount: {
            ...config.TEXT_STYLE.largeText,
            color: colors.text,
            textAlign: 'center',
        },
    });
    return styles;
}