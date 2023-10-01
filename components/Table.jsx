import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { dataWeek } from '../mock/top';
import up from '../assets/images/up.png';
import down from '../assets/images/down.png';
import { FIREBASE_AUTH } from '../firebase.config';

const Table = ({ topDataProp }) => {
  const [topData, setTopData] = useState([...topDataProp]);

  useEffect(() => {
    setTopData([...topDataProp]);
  }, [topDataProp]);

  useEffect(() => {
    if (
      topData.filter(
        (item) =>
          item.name === FIREBASE_AUTH.currentUser.email.split('@')[0],
      ).length === 0
    ) {
      setTopData((prev) => [
        ...prev,
        {
          position: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
          name: FIREBASE_AUTH.currentUser.email.split('@')[0],
          donated: 0,
          isBoosted: true,
        },
      ]);
    }
  }, [topData]);

  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <View style={styles.column1}>
          <Text style={styles.title}>Позиция</Text>
        </View>

        <View style={styles.column2}>
          <Text style={styles.title}>Имя</Text>
          <Text style={styles.title}>Пожертвовано (₽)</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          marginVertical: 4,
        }}
      />
      {topData.slice(3).map((user) => (
        <View key={user.name}>
          <View style={styles.row}>
            <View style={styles.column1}>
              <Text style={styles.text}>{user.position}</Text>
              <Image
                resizeMode="contain"
                source={user.isBoosted ? up : down}
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </View>

            <View style={styles.column2}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      FIREBASE_AUTH.currentUser.email.split('@')[0] ===
                      user.name
                        ? 'blue'
                        : 'black',
                  },
                ]}>
                {user.name}
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      FIREBASE_AUTH.currentUser.email.split('@')[0] ===
                      user.name
                        ? 'blue'
                        : 'black',
                  },
                ]}>
                {user.donated}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.5,
              backgroundColor: '#C4C7CD',
              marginVertical: 8,
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 26,
    paddingBottom: 10,
    borderRadius: 15,
    elevation: 5,
    marginTop: -20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  column1: {
    color: '#ccc',
    flex: 0.3,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  column2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#A0A6B1',
    fontSize: 12,
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
  },
});

export default Table;
