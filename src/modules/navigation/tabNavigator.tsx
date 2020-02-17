import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../../views/homeView';
import ProfileView from '../../views/profileView';

const Tab = createBottomTabNavigator();

export const AppTabNavigator: FC = () => {

    return (
        <Tab.Navigator initialRouteName="HomeView">
            <Tab.Screen name="HomeView" component={HomeView} />
            <Tab.Screen name="ProfileView" component={ProfileView} />
        </Tab.Navigator>
    );
}