import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import start from '../../assets/images/start.png';
import loginImg from '../../assets/images/Login-Register.png';

export default function Greet({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={start} style={styles.img} resizeMode="contain" />

      <Image source={loginImg} style={styles.img} resizeMode="contain" />

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('register')}
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: '#ACACAC',
              fontWeight: '600',
            }}>
            Нет аккаунта?{' '}
          </Text>
          <Text style={{ color: '#6574F7', fontWeight: '600' }}>
            Регистрация
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 23,
    paddingTop: 100,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    gap: 32,
  },
  img: {
    width: '100%',
  },
  btn: {
    borderRadius: 10,
    paddingVertical: 16,
    backgroundColor: '#5B6BF6',
    marginBottom: 15,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
