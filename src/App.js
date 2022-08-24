import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useOneSignal from './hooks/useOneSignal';

import RootStackNavigator from '@/navigation/RootStackNavigator';

const App = () => {
  useOneSignal({notificationOpenAppHandler: () => {}});

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
