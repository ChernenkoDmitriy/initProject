import React, { FC, useContext, useMemo, useState } from 'react';
import { Text, View, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { LocalizationContext } from '../../i18n/indes';
import { useTheme } from '@react-navigation/native';
import { MaterialInputWithSVG } from '../../components/materialInputWithSVG';
import { LinklButton } from '../../components/linkButton/linkButton';
import { MaterialButton } from '../../components/materialButton';
import EmailIcon from '../../assets/svg/email';
import { AgreementButton } from '../../components/agreementButton';
import { registrate } from '../../modules/redux/reducersAndActions/registration/registrationDataAction';

interface Props {
    navigation: any;
}

const RegistrationView: FC<Props> = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useContext(LocalizationContext);
    const { colors, dark } = useTheme();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const dispatch: AppDispatch = useDispatch();

    const onChangeEmail = (text: String) => {
        setEmail(text);
    }

    const navigateToAuthorizationView = () => {
        navigation.navigate('AuthorizationView');
    }

    const navigateToAgreementView = () => {
        navigation.navigate('AgreementView');
    }

    const onPressCheckBox = () => {

    }

    console.log('firstName, lastName, email, password', firstName, lastName, email, password)

    return (
        <KeyboardAvoidingView style={styles.container} onStartShouldSetResponder={Keyboard.dismiss}>
            <Text style={styles.textAccount}>{t('signUpWithEmail')}</Text>
            <View style={styles.inputsWrapper}>
                <MaterialInputWithSVG value={firstName} onChangeText={setFirstName} placeholder={t('firstName')} isDark={dark} />
                <MaterialInputWithSVG value={lastName} onChangeText={setLastName} placeholder={t('lastName')} isDark={dark} />
                <MaterialInputWithSVG value={email} onChangeText={onChangeEmail} placeholder={t('email')} icon={<EmailIcon color={dark ? '#FFF' : '#000'} />} isDark={dark} />
                <MaterialInputWithSVG value={password} onChangeText={setPassword} placeholder={t('password')} isDark={dark} />
                <AgreementButton text={t('agreeToAgreement')} isDark={dark} navigateToAgreementView={navigateToAgreementView} onPressCheckBox={onPressCheckBox}/>
            </View>
            <View style={styles.buttonsWrapper}>
                <MaterialButton onPress={() => { dispatch(registrate({ firstName, lastName, email, password })) }} title={t('signUp')} />
                <LinklButton onPress={navigateToAuthorizationView} title={t('alreadySignUp')} isDark={dark} />
            </View>
        </KeyboardAvoidingView>
    )
};

export default RegistrationView;
