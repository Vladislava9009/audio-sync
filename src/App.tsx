import {AppNavigator} from '@screens';
import {NotesProvider} from '@store';
import React, {useEffect} from 'react';
import {useColorScheme, View} from 'react-native';
import functions from '@react-native-firebase/functions';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
      .catch(er => console.log(er, 'er addAdminRole'));
    // addAdminRole()
  }, []);

  return (
    <SafeAreaProvider>
      <NotesProvider>
        <AppNavigator />
      </NotesProvider>
    </SafeAreaProvider>
  );
};

export default App;
