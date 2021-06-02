import {NavigationContainer} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import {AppNavigator, Login} from '@screens';
import {NotesProvider, useUserStore} from '@store';
import {TUserStore} from '@typings';
import React, {useEffect} from 'react';
import {useColorScheme, View} from 'react-native';
import functions from '@react-native-firebase/functions';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const addAdminRole = () => functions;

  useEffect(() => {
    console.log('here', functions);
    functions()
      .httpsCallable('addAdminRole')()
      .then(response => {
        console.log('good');
      })
      .catch(er => console.log(er, 'er'));
    // addAdminRole()
  }, []);

  return (
    <NotesProvider>
      <AppNavigator />
    </NotesProvider>
  );
};

export default App;
