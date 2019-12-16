import { createStackNavigator } from 'react-navigation-stack';
import AuthorizationScreen from '../../views/authenticationFlow/authorizationScreen/authorizationScreen';
import ForgotPasswordScreen from '../../views/authenticationFlow/forgotPasswordScreen/forgotPasswordScreen';
import RegistrationScreen from '../../views/authenticationFlow/registrationScreen/registrationScreen';
import DrawerNavigator from './drawerNavigator';
import SettingsScreen from '../../views/appFlow/settingsScreen/settingsScreen';

const navigationOptions = {
};

export const AppStack = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: () => ({
            header: null,
        })
    },
    SettingsScreen,
}, navigationOptions);

export const AuthenticationStack = createStackNavigator({
    AuthorizationScreen,
    ForgotPasswordScreen,
    RegistrationScreen,
},
    navigationOptions);