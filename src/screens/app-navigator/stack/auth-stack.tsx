import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreenParams} from '@typings';
import {Login} from '@screens';
import {routes} from '@constants';
import {defaultStackOptions} from '../options';

export const AuthStackNavigator = () => {
  const {t} = useTranslation();

  const AuthStack = createStackNavigator<TScreenParams>();
  return (
    <AuthStack.Navigator screenOptions={defaultStackOptions}>
      <AuthStack.Screen name={routes.LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};
