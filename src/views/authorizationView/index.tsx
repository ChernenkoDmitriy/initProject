import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { signUp } from '../../modules/redux/reducersAndActions/appState/appStateActions';

interface Props {
    navigation?: any;
}

const AuthorizationView: FC<Props> = ({ navigation }) => {
    const dispatch: AppDispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>componentName</Text>
            <Button title='sign in' onPress={()=>{dispatch(signUp(true))}}/>
        </View>
    )
};

export default AuthorizationView;