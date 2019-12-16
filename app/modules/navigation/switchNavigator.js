import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../../views/splashScreen/splashScreen';
import { AuthenticationStack, AppStack } from './stackNavigator';

export default SwitchNavigator = createAppContainer(createSwitchNavigator(
  {
    SplashScreen,
    App: AppStack,
    Auth: AuthenticationStack,
  },
  {
    initialRouteName: 'SplashScreen',
  }
));