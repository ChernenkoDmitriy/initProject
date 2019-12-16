import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TabScreen from '../../views/appFlow/tabScreen/tabScreen';
import HomeScreen from '../../views/appFlow/homeScreen/homeScreen';

import Utils from '../../services/utils/utils';

const { isIphoneX } = Utils;

const screens = {
    HomeScreen,
    TabScreen,
};

const tabbarOption = {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        pressColor: '#0792fc',
        activeTintColor: '#000000',
        inactiveTintColor: '#000000',
        showIcon: true,
        style: {
            height: isIphoneX ? 90 : 55,
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderTopWidth: 1,
            borderTopColor: '#c5c6c9',
        },
        labelStyle: {
            marginVertical: 5,
            fontSize: 10,
        },
        indicatorStyle: {
            padding: 0,
            height: 0,
            margin: 0,
        }
    },
};

const TabBarNavigator = createMaterialTopTabNavigator(
    screens,
    {
        tabBarOptions: tabbarOption,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        backBehavior: 'none',
        safeAreaInset: { bottom: 'always', top: 'never' }
    }
);

export default TabBarNavigator;