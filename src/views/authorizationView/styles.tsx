import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1d1552',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
    },
    inputsWrapper: {
        height: 140,
        justifyContent: 'space-around',
    },
    buttonsWrapper:{
        height: 80,
        justifyContent: 'space-around',
    },
    forgotPassWrapper: {
        height: 35,
        flexDirection: 'row',
    },
    textAccount: {
        ...config.TEXT_STYLE.largeText,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
