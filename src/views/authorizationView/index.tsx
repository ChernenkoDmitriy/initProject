import React, { FC, useContext, useState } from 'react';
import { View, Keyboard, KeyboardAvoidingView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { signUp } from '../../modules/redux/reducersAndActions/appState/appStateActions';
import { MaterialButton } from '../../components/materialButton';
import { LinklButton } from '../../components/linkButton/linkButton';
import { LocalizationContext } from '../../i18n/indes';
import { MaterialInputWithSVG } from '../../components/materialInputWithSVG';
import EmailIcon from '../../assets/svg/email';
import { useTheme } from '@react-navigation/native';

interface Props {
    navigation: any;
}

const AuthorizationView: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useContext(LocalizationContext);
    const { colors } = useTheme();
    const dispatch: AppDispatch = useDispatch()

    const onChangeEmail = (text: String) => {
        setEmail(text);
    }

    return (
        <KeyboardAvoidingView style={styles.container} onStartShouldSetResponder={Keyboard.dismiss}>
            <Text style={styles.textAccount}>{t('signInto')}</Text>
            <View style={styles.inputsWrapper}>
                <MaterialInputWithSVG value={email} onChangeText={onChangeEmail} placeholder={t('email')} icon={<EmailIcon />} />
                <MaterialInputWithSVG value={password} onChangeText={setPassword} placeholder={t('password')} />
                <View style={styles.forgotPassWrapper}>
                    <View style={{ flex: 1 }} />
                    <LinklButton onPress={() => { }} title={t('forgotPass')} />
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <MaterialButton onPress={() => { dispatch(signUp(true)) }} title='sign in' />
                <LinklButton onPress={() => { }} title={t('needSignUp')} />
            </View>
        </KeyboardAvoidingView>
    )
};

export default AuthorizationView;