import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AuthorizationView from '../../views/authorizationView';
import SplashView from '../../views/splashView';
import { AppTabNavigator } from './tabNavigator';
import RegistrationView from '../../views/registrationView';
import RecoverPasswordView from '../../views/recoverPasswordView';
import AgreementView from '../../views/agreementView';

interface RootState {
    appState: {
        isSignUp: boolean,
        isLoadingSplashView: boolean,
    }
}

const Stack = createStackNavigator();
const selectIsSignUp = (state: RootState) => state.appState.isSignUp;
const selectIsLoadingSplashView = (state: RootState) => state.appState.isLoadingSplashView;

export const AppStackNavigator: FC = () => {
    const isSignUp = useSelector(selectIsSignUp);
    const isLoadingSplashView = useSelector(selectIsLoadingSplashView);

    return (
        <Stack.Navigator >
            {
                isLoadingSplashView ? <Stack.Screen name='SplashView' component={SplashView} options={{ headerShown: false }} /> :
                    isSignUp ?
                        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} options={{ headerTitleAlign: 'center', }} />
                        :
                        <>
                            <Stack.Screen name="AuthorizationView" component={AuthorizationView} options={{ headerShown: false }} />
                            <Stack.Screen name="AgreementView" component={AgreementView} options={{ headerShown: false }} />
                            <Stack.Screen name="RecoverPasswordView" component={RecoverPasswordView} options={{ headerShown: false }} />
                            <Stack.Screen name="RegistrationView" component={RegistrationView} options={{ headerShown: false }} />
                        </>
            }
        </Stack.Navigator>
    );
}