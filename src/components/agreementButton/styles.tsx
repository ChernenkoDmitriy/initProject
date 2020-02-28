import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    highlightContainer:{
        height: 40,
        width: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBoxContainer: {
        height: 34,
        width: 34,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});