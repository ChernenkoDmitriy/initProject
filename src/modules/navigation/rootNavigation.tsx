import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, shallowEqual } from 'react-redux';
import { AppStackNavigator } from './stackNavigator';

interface RootState {
  theme: {
    dark: Boolean;
    colors: {
      primary: String;
      background: String;
      card: String;
      text: String;
      border: String;
      dark: Boolean;
    };
  }
};

const selectTheme = (state: RootState) => state.theme;

export const RootNavigation: FC = () => {
  const theme = useSelector(selectTheme, shallowEqual);

  return (
    <NavigationContainer theme={theme} >
      <AppStackNavigator />
    </NavigationContainer>
  );
};
