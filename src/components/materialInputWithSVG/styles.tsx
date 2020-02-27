import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 40,
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
    },
    textImput: {
        flex: 1,
        padding: 0,
        color: '#FFFFFF',
        marginHorizontal: 10,
    },
    iconWrapper: {
        height: 40,
        width: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
});