import {AppNavigator} from '@screens';
import {NotesProvider} from '@store';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NotesProvider>
        <AppNavigator />
      </NotesProvider>
    </SafeAreaProvider>
  );
};

export default App;
