import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    highlightContainer: {
        height: 30,
        width: 30,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBoxContainer: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLinkWrapper: {
        flex: 1,
    }
});