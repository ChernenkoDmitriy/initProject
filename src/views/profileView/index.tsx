import React, { FC, useContext, useCallback } from 'react';
import { ScrollView, View, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { AppDispatch } from '../../modules/redux/store';
import { changeTheme } from '../../modules/redux/reducersAndActions/appTheme/themeAction';
import { ProfileItem } from './components/profileItem';
import { LocalizationContext } from '../../i18n/indes';
import Team from '../../assets/svg/team';
import { useTheme } from '@react-navigation/native';
import SettingsIcon from '../../assets/svg/settings';
import BrightnessIcon from '../../assets/svg/brightness';
import LanguageIcon from '../../assets/svg/language';

interface Props {
    navigation?: any;
}

const SwitchStyled = () => {
    const dispatch: AppDispatch = useDispatch();
    const { dark } = useTheme();
    return (
        <Switch value={dark} onChange={() => { dispatch(changeTheme()) }} thumbColor={dark ? '#FFFFFF' : '#333333'} trackColor={{ false: '#999999', true: '#999999' }} />
    )
}

const ProfileView: FC<Props> = ({ navigation }) => {
    const { t, locale, setLocale } = useContext(LocalizationContext);
    const dispatch: AppDispatch = useDispatch();
    const { colors, dark } = useTheme();

    const chengeLocale = useCallback(() => {
        const newLocale = locale === 'en' ? 'ru' : 'en';
        setLocale(newLocale);
    }, [locale]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <ProfileItem onPress={() => { }} text={t('createTeam')} icon={<Team color={dark ? '#FFFFFF' : '#000000'} />} isDark={dark} />
                <ProfileItem onPress={chengeLocale} text={t('language')} icon={<LanguageIcon color={dark ? '#FFFFFF' : '#000000'} />} isDark={dark} />
                <ProfileItem onPress={() => { }} disabled text={t('theme')} icon={<BrightnessIcon color={dark ? '#FFFFFF' : '#000000'} />} isDark={dark} rightElement={<SwitchStyled />} />
                <ProfileItem onPress={() => { }} text={t('settingsProfile')} icon={<SettingsIcon color={dark ? '#FFFFFF' : '#000000'} />} isDark={dark} />
            </ScrollView>
        </View>
    )
};

export default ProfileView;
