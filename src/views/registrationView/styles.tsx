import { StyleSheet } from 'react-native';
import { config } from '../../config';
import { Dimensions, StatusBar } from 'react-native';

const { height } = Dimensions.get("window");

export const getStyle = (colors: any) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-around',
            height: height - StatusBar.currentHeight,
            paddingHorizontal: 20,
            width: '100%',
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