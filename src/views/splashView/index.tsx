import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../modules/redux/store';
import { loadingSplashView } from '../../modules/redux/reducersAndActions/appState/appStateActions';
import { styles } from './styles';

interface Props {
    navigation?: any;
}

const SplashView: FC<Props> = ({ navigation }) => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(loadingSplashView(false));
        }, 500);
    }, [])

    return (
        <View style={styles.container}>
            <Text>SplashView</Text>
        </View >
    )
};

export default SplashView;