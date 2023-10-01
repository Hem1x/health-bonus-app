import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../../firebase.config';
import { Picker } from '@react-native-picker/picker';

import TopTypePicker from '../../components/TopTypePicker';
import Top3 from '../../components/Top3';
import Table from '../../components/Table';
import { employer } from '../../mock/employer';
import User from '../../assets/icons/User.png';
import UserActive from '../../assets/icons/UserActive.png';
import Home from '../../assets/icons/Home.png';
import HomeActive from '../../assets/icons/HomeActive.png';
import {
  dataCompany,
  dataDepartament,
  dataFriends,
  dataMonth,
  dataYear,
} from '../../mock/top';

{
  /* <Button
        onPress={() => navigation.navigate('details')}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log out" />

      <Text>{FIREBASE_AUTH && FIREBASE_AUTH.currentUser.email}</Text> */
}

const dateTabs = ['За неделю', 'За месяц', 'За год'];
const topTypeTabs = ['По отделу', 'По компании', 'Среди друзей'];

const Top = ({ navigation }) => {
  const [date, setDate] = useState(dateTabs[0]);
  const [topType, setTopType] = useState(topTypeTabs[0]);
  const [topData, setTopData] = useState(dataDepartament);

  useEffect(() => {
    if (topType === 'По отделу') {
      setTopData(dataDepartament);
      setDate(dateTabs[0]);
    } else if (topType === 'По компании') {
      setTopData(dataCompany);
      setDate(dateTabs[0]);
    } else if (topType === 'Среди друзей') {
      setDate(dateTabs[0]);
      setTopData(dataFriends);
    }
  }, [topType]);

  useEffect(() => {
    if (date === 0) {
      setTopData(dataDepartament);
    } else if (date === 1) {
      setTopData(dataMonth);
    } else if (date === 2) setTopData(dataYear);
  }, [date]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Топ по{'\n'}пожертвованиям</Text>
          <Text style={styles.text}>
            Рейтинг лучших пользователей по пожертвованиям за неделю, месяц
            или год
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Picker
              style={{ width: 160, marginBottom: 10 }}
              dropdownIconColor="#6574F7"
              selectedValue={date}
              onValueChange={(itemValue) => setDate(itemValue)}>
              <Picker.Item
                style={{ color: '#6574F7' }}
                label="За неделю"
                value={0}
              />
              <Picker.Item
                style={{ color: '#6574F7' }}
                label="За месяц"
                value={1}
              />
              <Picker.Item
                style={{ color: '#6574F7' }}
                label="За год"
                value={2}
              />
            </Picker>
            <Text style={{ marginTop: 18, fontSize: 12, fontWeight: 500 }}>
              Статус: Руководитель
            </Text>
          </View>

          <View>
            <TopTypePicker
              topType={topType}
              topTypeTabs={topTypeTabs}
              setTopType={setTopType}
            />
            <View>
              <Top3 topData={topData} />
              <Table topDataProp={topData} setTopData={setTopData} />
            </View>
          </View>

          <View>
            <View
              style={{
                marginTop: 50,
                marginBottom: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}>
                Мои подчиненные{' '}
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: '#A0A6B1',
                }}>
                +
              </Text>
            </View>

            {employer.map((emp) => (
              <View
                style={{
                  padding: 23,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  marginBottom: 20,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    color: '#6C79A3',
                    fontSize: 16,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}>
                  {emp.name}
                </Text>
                <Text
                  style={{
                    color: '#5A6DF6',
                    fontSize: 24,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}>
                  {emp.monthly} руб за месяц
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    marginBottom: 8,
                  }}>
                  Фонд "{emp.fond}"
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Image source={UserActive} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('avtivity')}>
          <Image source={Home} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FD',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: {
    fontSize: 33,
    fontWeight: '600',
    letterSpacing: 3.4,
    color: '#5A6DF6',
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6C79A3',
    marginBottom: 10,
    lineHeight: 20,
  },
  navigation: {
    backgroundColor: 'white',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Top;
