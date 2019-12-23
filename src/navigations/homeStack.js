import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
    HomeScreen,
    DetailScreen
} from '../screens/index';
import { createAppContainer } from 'react-navigation';

import { fadeIn, fromBottom } from 'react-navigation-transitions';

export const AppStack = createStackNavigator(
    {
        Home : HomeScreen,
        Detail : {
            screen: DetailScreen,
            transitionConfig: () => fadeIn(),
        },
    },
    {
        defaultNavigationOptions: {
            header : null
        },
        initialRouteName : 'Home',
        transitionConfig: () => fadeIn(),
    }
)

export const AppContainer = createAppContainer(AppStack)