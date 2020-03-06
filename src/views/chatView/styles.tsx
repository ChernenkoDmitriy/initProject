import { StyleSheet } from 'react-native';
import { config } from '../../config';

export const getStyle = (colors: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });
    return styles;
}