import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { fondTabs } from '../app/screens/Activity';

const ActivityConvert = ({ data, fond }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Доступно для конвертирвания</Text>
      <View style={styles.convertData}>
        <Text style={styles.convertDataItem}>
          {data.from} {data.text}
        </Text>
        <Text style={styles.convertDataItem}>~</Text>
        <Text style={styles.convertDataItem}>{data.to} руб</Text>
      </View>
      <Text style={styles.fond}>{fond}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Конвертировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 23,
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 20,
    marginBottom: 70,
  },
  title: {
    color: '#6C79A3',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  convertData: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 5,
    marginRight: 30,
  },
  convertDataItem: {
    fontSize: 24,
    fontWeight: '600',
    color: '#5A6DF6',
  },
  fond: {
    fontSize: 14,
    marginBottom: 30,
  },
  btn: {
    borderWidth: 1.3,
    borderColor: '#5A6DF6',
    maxWidth: 210,
    paddingVertical: 7,
    borderRadius: 8,
  },
  btnText: {
    textAlign: 'center',
    color: '#5A6DF6',
    fontSize: 16,
  },
});

export default ActivityConvert;
