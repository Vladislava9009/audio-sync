import * as React from 'react';
import {NavigationContainer} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import {useUserStore} from '@store';
import {routes} from '@constants';
import {AuthStackNavigator} from './stack';
import {routeNavigatorScreenOptions} from './options';

const AppNavigatorScreen = () => {
  // Main screen data.

  const {isAuthorized} = useUserStore();
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
        {!!isAuthorized ? (
          <RootStack.Screen
            name={routes.AUTH_NAVIGATOR}
            component={AuthStackNavigator}
          />
        ) : (
          <RootStack.Screen
            name={routes.AUTH_NAVIGATOR}
            component={AuthStackNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatorScreen;
