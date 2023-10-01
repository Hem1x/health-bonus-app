import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import ActivityCurrent from '../../components/ActivityCurrent';
import ActivityScrollBar from '../../components/ActivityScrollBar';
import User from '../../assets/icons/User.png';
import HomeActive from '../../assets/icons/HomeActive.png';
import { FIREBASE_AUTH } from '../../firebase.config';
import { Picker } from '@react-native-picker/picker';

export const fondTabs = [
  'Фонд "Свет"',
  'Фонд "Добро"',
  'Фонд "Сердце"',
  'Фонд "Дружба"',
  'Фонд "Цветок"',
];
export default function Activity({ navigation }) {
  const [fond, setFond] = useState(fondTabs[0]);
  const [score, setScore] = useState({
    donated: 0,
    steps: Math.floor(Math.random() * 4000),
    run: Math.floor(Math.random() * 2000),
    cycle: Math.floor(Math.random() * 20),
    swim: Math.floor(Math.random() * 1000),
  });

  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#F8F9FD',
            height: '100%',
          }}>
          <View style={styles.container}>
            <Text style={styles.title}>Активность - во благо</Text>
            <Text style={styles.text}>
              Приложение для конвертации активности в пожертвоварния
              благотворительным фондам
            </Text>
            <ActivityCurrent score={score} setScore={setScore} />
          </View>

          {!(
            score.cycle === 0 &&
            score.steps === 0 &&
            score.run === 0 &&
            score.swim === 0
          ) ? (
            <>
              <Picker
                style={{
                  marginBottom: 10,
                }}
                dropdownIconColor="#6574F7"
                selectedValue={fond}
                onValueChange={(itemValue) => setFond(itemValue)}>
                <Picker.Item
                  style={{ color: '#6574F7' }}
                  label={fondTabs[0]}
                  value={fondTabs[0]}
                />
                <Picker.Item
                  style={{ color: '#6574F7' }}
                  label={fondTabs[1]}
                  value={fondTabs[1]}
                />
                <Picker.Item
                  style={{ color: '#6574F7' }}
                  label={fondTabs[2]}
                  value={fondTabs[2]}
                />
                <Picker.Item
                  style={{ color: '#6574F7' }}
                  label={fondTabs[3]}
                  value={fondTabs[3]}
                />
                <Picker.Item
                  style={{ color: '#6574F7' }}
                  label={fondTabs[4]}
                  value={fondTabs[4]}
                />
              </Picker>
              <ActivityScrollBar
                fond={fond}
                setScore={setScore}
                score={score}
              />
            </>
          ) : (
            <View style={{ padding: 3, marginBottom: 100 }}>
              <Text style={{ textAlign: 'center', marginTop: 60 }}>
                У вас нет активности
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => FIREBASE_AUTH.signOut()}
            style={{
              marginBottom: 70,
              backgroundColor: '#F0F0F0',
              width: '100%',
              paddingVertical: 15,
              alignContent: 'center',
            }}>
            <Text style={{ textAlign: 'center', color: 'red' }}>
              Выйти из аккаунта
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('top')}>
          <Image source={User} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={HomeActive} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    letterSpacing: 3.4,
    color: '#5A6DF6',
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6C79A3',
    marginBottom: 25,
    lineHeight: 20,
  },
  navigation: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'white',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
