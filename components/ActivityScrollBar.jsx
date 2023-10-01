import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ActivityConvert from './ActivityConvert';

const convertTo = (activity) => {
  if (activity <= 20) {
    return Math.ceil(activity);
  }
  return Math.ceil(activity * 0.04);
};

const ActivityScrollBar = ({ fond, setScore, score }) => {
  const data = [
    {
      keyValue: 'steps',
      text: 'шагов',
      from: score.steps,
      to: convertTo(score.steps),
    },
    {
      keyValue: 'run',
      text: 'м бег',
      from: score.run,
      to: convertTo(score.run),
    },
    {
      keyValue: 'cycle',
      text: 'км велосипед',
      from: score.cycle,
      to: convertTo(score.cycle),
    },
    {
      keyValue: 'swim',
      text: 'м плавание',
      from: score.swim,
      to: convertTo(score.swim),
    },
  ];

  return (
    <ScrollView horizontal={true} style={{}}>
      {data.map(
        (item) =>
          item.from !== 0 && (
            <ActivityConvert
              key={item.text}
              data={item}
              fond={fond}
              keyValue={item.keyValue}
              score={score}
              setScore={setScore}
            />
          ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ActivityScrollBar;
