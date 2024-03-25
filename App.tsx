import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './components/NavBar'


const navTheme = DefaultTheme;
navTheme.colors.background = 'black';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer theme={navTheme}>
      <NavBar />
    </NavigationContainer>
  );
}

export default App;
