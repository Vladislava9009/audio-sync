import * as React from 'react';
import {NavigationContainer} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import {observer, useUserStore} from '@store';
import {routes} from '@constants';
import {AuthStackNavigator, MainStackNavigator} from './stack';
import {routeNavigatorScreenOptions} from './options';

const AppNavigatorScreen = observer(() => {
  // Main screen data.

  const {user} = useUserStore();
  const RootStack = createStackNavigator();
  console.log(user, 'user');

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
        {!!user ? (
          <RootStack.Screen
            name={routes.MAIN_NAVIGATOR}
            component={MainStackNavigator}
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
});

export default AppNavigatorScreen;
