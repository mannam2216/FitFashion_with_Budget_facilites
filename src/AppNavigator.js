import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSuccess from './OrderSuccess';
import Orders from './Screens/Orders';
import Logout from './Screens/Logout';
import ProductInfo from './Screens/ProductInfo';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Logout"
          component={Logout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderSuccess"
          component={OrderSuccess}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductInfo"
          component={ProductInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator