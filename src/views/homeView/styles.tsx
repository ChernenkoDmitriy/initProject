import { StyleSheet } from 'react-native';

export const getStyle = (key: String, theme?:any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            color: theme.text,
            // fontSize: theme.textSize,
        },
    });
    return styles[key];
};