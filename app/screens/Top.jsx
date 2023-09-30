import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { FIREBASE_AUTH } from '../../firebase.config';
import { UserContext } from '../../App';

const Top = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('details')}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log out" />

      <Text>{FIREBASE_AUTH && FIREBASE_AUTH.currentUser.email}</Text>
    </View>
  );
};

export default Top;
