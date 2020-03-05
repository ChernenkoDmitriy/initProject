import { StyleSheet } from 'react-native';
import { config } from '../../../../config';

export const styles = StyleSheet.create({
    container: {
        minHeight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        height: 40,
        width: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...config.TEXT_STYLE.middleText,
        padding: 8,
        alignSelf: 'center',
        flex: 1,
    },
});