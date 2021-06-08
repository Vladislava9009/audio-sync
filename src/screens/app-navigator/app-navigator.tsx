import * as React from 'react';
import {NavigationContainer, When} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import {observer, useUserStore} from '@store';
import {routes} from '@constants';
import {
  AuthStackNavigator,
  SlaveStackNavigator,
  MasterStackNavigator,
} from './stack';
import {routeNavigatorScreenOptions} from './options';
import auth from '@react-native-firebase/auth';

const AppNavigatorScreen = observer(() => {
  const {user} = useUserStore();
  const RootStack = createStackNavigator();
  console.log(user, 'user');

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
        {!user ? (
          <RootStack.Screen
            name={routes.AUTH_NAVIGATOR}
            component={AuthStackNavigator}
          />
        ) : user?.admin ? (
          <RootStack.Screen
            name={routes.MASTER_NAVIGATOR}
            component={MasterStackNavigator}
          />
        ) : (
          <RootStack.Screen
            name={routes.SLAVE_NAVIGATOR}
            component={SlaveStackNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

export default AppNavigatorScreen;
