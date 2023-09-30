import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ActivityConvert from './ActivityConvert';

const ActivityScrollBar = () => {
  const data = [
    { text: 'шагов', from: 500, to: 20, fond: 'Красная жопка' },
    { text: 'м бег', from: 120, to: 5, fond: 'Красная жопка' },
    { text: 'км велосипед', from: 0, to: 0, fond: 'Красная жопка' },
    { text: 'плавание', from: 0, to: 0, fond: 'Красная жопка' },
  ];

  return (
    <ScrollView horizontal={true} style={{}}>
      {data.map((item) => (
        <ActivityConvert key={item.text} data={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ActivityScrollBar;
