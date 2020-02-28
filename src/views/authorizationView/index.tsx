import React, { FC, useContext, useState, useMemo } from 'react';
import { View, Keyboard, KeyboardAvoidingView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';
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
    const { colors, dark } = useTheme();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const dispatch: AppDispatch = useDispatch();

    const onChangeEmail = (text: String) => {
        setEmail(text);
    }

    const navigateToRegistrationView = () => {
        navigation.navigate('RegistrationView');
    }

    return (
        <KeyboardAvoidingView style={styles.container} onStartShouldSetResponder={Keyboard.dismiss}>
            <Text style={styles.textAccount}>{t('signInto')}</Text>
            <View style={styles.inputsWrapper}>
                <MaterialInputWithSVG value={email} onChangeText={onChangeEmail} placeholder={t('email')} icon={<EmailIcon color={dark ? '#FFF' : '#000'} />} isDark={dark} />
                <MaterialInputWithSVG value={password} onChangeText={setPassword} placeholder={t('password')} isDark={dark} />
                <View style={styles.forgotPassWrapper}>
                    <View style={{ flex: 1 }} />
                    <LinklButton onPress={() => { }} title={t('forgotPass')} isDark={dark} />
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                <MaterialButton onPress={() => { dispatch(signUp(true)) }} title={t('signIn')} />
                <LinklButton onPress={navigateToRegistrationView} title={t('needSignUp')} isDark={dark} />
            </View>
        </KeyboardAvoidingView>
    )
};

export default AuthorizationView;