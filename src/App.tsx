import {NavigationContainer} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import {AppNavigator, Login} from '@screens';
import {NotesProvider, useUserStore} from '@store';
import {TUserStore} from '@typings';
import React from 'react';
import {useColorScheme, View} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NotesProvider>
      <AppNavigator />
    </NotesProvider>
  );
};

export default App;
