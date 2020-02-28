import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 2,
    },
    text: {
        ...config.TEXT_STYLE.middleText,
        padding: 8,
        textAlign: 'center',
    }
});