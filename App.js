import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Details from './app/screens/Details';
import List from './app/screens/List';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase.config';
import Greet from './app/screens/Greet';

import BackBtn from './components/BackBtn';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My todos" component={List} />
      <InsideStack.Screen name="details" component={Details} />
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="greet">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            initialParams={{ user }}
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
  );
}
