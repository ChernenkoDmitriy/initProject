import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:'absolute',
        bottom:15
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 15,
    },
});