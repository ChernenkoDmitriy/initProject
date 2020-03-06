import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { changeTheme } from '../../modules/redux/reducersAndActions/appTheme/themeAction';

interface Props {
    navigation?: any;
}

const ProfileView: FC<Props> = ({ navigation }) => {
    const dispatch: AppDispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>ProfileView</Text>
            <Button title='change theme' onPress={() => { dispatch(changeTheme()) }} />
        </View>
    )
};

export default ProfileView;
