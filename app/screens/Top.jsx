import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebase.config';
import { Picker } from '@react-native-picker/picker';

import TopTypePicker from '../../components/TopTypePicker';
import Top3 from '../../components/Top3';
import Table from '../../components/Table';

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

  const displayTabContent = () => {
    switch (topType) {
      case 'По отделу':
        return <Text>{topType}</Text>;
        break;
      case 'По компании':
        return <Text>{topType}</Text>;
        break;
      case 'Среди друзей':
        return <Text>{topType}</Text>;
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Топ по{'\n'}пожертвованиям</Text>
        <Text style={styles.text}>
          Рейтинг лучших пользователей по пожертвованиям за неделю, месяц
          или год
        </Text>
        <Picker
          style={{ width: 160, marginBottom: 20, margin: 0 }}
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

        <View>
          <TopTypePicker
            topType={topType}
            topTypeTabs={topTypeTabs}
            setTopType={setTopType}
          />
          <View>
            <Top3 />
            <Table />
          </View>
        </View>
      </View>
    </ScrollView>
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

    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6C79A3',
    marginBottom: 35,
    lineHeight: 20,
  },
});
export default Top;
