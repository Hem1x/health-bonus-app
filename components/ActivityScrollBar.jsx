import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ActivityConvert from './ActivityConvert';

const ActivityScrollBar = ({ fond }) => {
  const data = [
    { text: 'шагов', from: 500, to: 20 },
    { text: 'м бег', from: 120, to: 5 },
    { text: 'км велосипед', from: 0, to: 0 },
    { text: 'плавание', from: 0, to: 0 },
  ];

  return (
    <ScrollView horizontal={true} style={{}}>
      {data.map(
        (item) =>
          item.from !== 0 && (
            <ActivityConvert key={item.text} data={item} fond={fond} />
          ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ActivityScrollBar;
