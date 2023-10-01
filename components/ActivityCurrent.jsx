import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ActivityCurrent = ({ score }) => {
  const data = [
    {
      text: 'Пожертвовано',
      data: score.donated,
      color: '2EE700',
    },
    {
      text: 'Шаги',
      data: score.steps,
      color: 'FF044F',
    },
    {
      text: 'Бег, м',
      data: score.run,
      color: '1E3ECB',
    },
    {
      text: 'Велосипед, км',
      data: score.cycle,
      color: '699BF7',
    },
    {
      text: 'Плавание',
      data: score.swim,
      color: 'FFAA00',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Моя активность за сегодня</Text>
      <View style={styles.activity}>
        {data.map((item) => (
          <View style={styles.activityItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={[
                  styles.actColor,
                  { backgroundColor: '#' + item.color },
                ]}
              />
              <Text style={styles.actText}>{item.text}</Text>
            </View>

            <Text style={styles.actData}>
              {' '}
              {item.text === 'Пожертвовано' ? item.data + ' ₽' : item.data}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 20,
  },
  activity: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  activityItem: {},
  actColor: { width: 8, height: 8, borderRadius: 10, marginRight: 8 },
  actText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#A0A6B1',
  },
  actData: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
});

export default ActivityCurrent;
