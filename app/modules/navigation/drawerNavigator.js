import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Utils from '../../services/utils/utils';
import TabBarNavigator from './tabNavigator';
import DrawerMenu from '../../components/drawerMenu/drawerMenu';

const stackNavRoutes = {
    TabBarNavigator,
};

const getDrawerWidth = () => Utils.size.width * 0.75;

const DrawerNavigator = createAppContainer(createDrawerNavigator(
    stackNavRoutes,
    {
        drawerWidth: getDrawerWidth(),
        contentComponent: props => <DrawerMenu {...props} />,
        drawerBackgroundColor: '#ffffff',
    },
));

export default DrawerNavigator;
