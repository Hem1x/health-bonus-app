import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ActivityCurrent from '../../components/ActivityCurrent';
import ActivityScrollBar from '../../components/ActivityScrollBar';

export default function Activity() {
  return (
    <View style={{ backgroundColor: '#F8F9FD' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Активность - во благо</Text>
        <Text style={styles.text}>
          Приложение для конвертации активности в пожертвоварния
          благотворительным фондам
        </Text>
        <ActivityCurrent />
      </View>
      <ActivityScrollBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: {
    fontSize: 34,
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
