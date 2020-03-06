import { StyleSheet } from 'react-native';
import { config } from '../../../../config';

export const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#123132',
    },
    text: {
        ...config.TEXT_STYLE.middleText,
        padding: 8,
        alignSelf: 'center',
        flex: 1,
    },
});