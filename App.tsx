
import { NavigationContainer } from '@components';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@screens';
import React from 'react';
import {
  useColorScheme, View,
} from 'react-native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
