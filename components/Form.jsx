import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Form = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Пароль"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});

export default Form;
