import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreenParams} from '@typings';
import {Login, SignUp} from '@screens';
import {routes} from '@constants';
import {defaultStackOptions} from '../options';

export const AuthStackNavigator = () => {
  const AuthStack = createStackNavigator<TScreenParams>();
  return (
    <AuthStack.Navigator screenOptions={defaultStackOptions}>
      <AuthStack.Screen name={routes.LOGIN} component={Login} />
      <AuthStack.Screen name={routes.SIGN_UP} component={SignUp} />
    </AuthStack.Navigator>
  );
};
