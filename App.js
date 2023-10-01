import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase.config';

import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Greet from './app/screens/Greet';

import Activity from './app/screens/Activity';
import Top from './app/screens/Top';
import Profile from './app/screens/Profile';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator initialRouteName="top">
      <InsideStack.Screen
        name="avtivity"
        component={Activity}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="top"
        component={Top}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor={'#F8F9FD'}
          networkActivityIndicatorVisible={true}
        />
        <Stack.Navigator initialRouteName="greet">
          {user ? (
            <Stack.Screen
              name="Inside"
              component={InsideLayout}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="greet"
                component={Greet}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
