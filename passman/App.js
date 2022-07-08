import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/pages/signUp';
import LoginComponent from './src/pages/login';
import HomeComponent from './src/pages/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/* <Stack.Screen name="Login" component={LoginComponent} /> */}
        <Stack.Screen name="Home Screen" component={HomeComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
