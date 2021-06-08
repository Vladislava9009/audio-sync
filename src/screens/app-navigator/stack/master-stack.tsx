import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreenParams} from '@typings';
import {Home} from '@screens';
import {routes} from '@constants';
import {defaultStackOptions} from '../options';

export const MasterStackNavigator = () => {
  const MasterStack = createStackNavigator<TScreenParams>();
  return (
    <MasterStack.Navigator screenOptions={defaultStackOptions}>
      <MasterStack.Screen name={routes.AUDIO} component={Home} />
    </MasterStack.Navigator>
  );
};
