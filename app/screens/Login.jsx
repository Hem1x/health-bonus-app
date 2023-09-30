import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FIREBASE_AUTH } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code.startsWith('auth/')
      ) {
        const errorCode = error.code.replace('auth/', '');
        if (errorCode === 'invalid-email') {
          Alert.alert('Предупреждение', 'Неверный формат почты');
        } else if (errorCode === 'invalid-login-credentials') {
          Alert.alert('Ошибка', 'Неверный логин или пароль');
        } else {
          Alert.alert('Ошибка', `${errorCode}`);
        }
      } else {
        Alert.alert('Ошибка', `Произошла неизвестная ошибка:${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <BackBtn style={{ position: 'absolute', zIndex: 10 }} /> */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Вход
      </Text>

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

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.btn} onPress={signIn}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
              }}>
              Войти
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('greet')}>
            <Text style={{ textAlign: 'center' }}>Назад</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 40,
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  btn: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#6574F7',
    marginTop: 10,
    marginBottom: 20,
  },
});
