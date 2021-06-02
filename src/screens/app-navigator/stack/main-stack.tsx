import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreenParams} from '@typings';
import {Home, Login} from '@screens';
import {routes} from '@constants';
import {defaultStackOptions} from '../options';

export const MainStackNavigator = () => {
  const MainStack = createStackNavigator<TScreenParams>();
  return (
    <MainStack.Navigator screenOptions={defaultStackOptions}>
      <MainStack.Screen name={routes.LOGIN} component={Home} />
    </MainStack.Navigator>
  );
};
