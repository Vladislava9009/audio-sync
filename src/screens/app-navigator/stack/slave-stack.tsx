import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreenParams} from '@typings';
import {SlavePlayer} from '@screens';
import {routes} from '@constants';
import {defaultStackOptions} from '../options';

export const SlaveStackNavigator = () => {
  const SlaveStack = createStackNavigator<TScreenParams>();

  return (
    <SlaveStack.Navigator screenOptions={defaultStackOptions}>
      <SlaveStack.Screen
        name={routes.SLAVE_PLAYER}
        options={{headerShown: false}}
        component={SlavePlayer}
      />
    </SlaveStack.Navigator>
  );
};
