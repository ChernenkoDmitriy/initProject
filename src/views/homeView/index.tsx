import React, { FC, useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { signUp } from '../../modules/redux/reducersAndActions/appState/appStateActions';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../../i18n/indes';

interface Props {
    navigation?: any;
}

const HomeView: FC<Props> = ({ navigation }) => {
    const dispatch: AppDispatch = useDispatch()
    const { colors } = useTheme();
    const { t } = useContext(LocalizationContext);

    return (
        <View style={getStyle('container', colors)}>
            <Text style={getStyle('title', colors)}>HomeView</Text>
            <Button title='sign out' onPress={() => { dispatch(signUp(false)) }} />
        </View>
    )
};

export default HomeView;
