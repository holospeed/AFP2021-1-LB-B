import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Main from './screens/Main';
import Maps from './screens/Maps';

const Stack = createNativeStackNavigator();

const Roots = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Roots;
