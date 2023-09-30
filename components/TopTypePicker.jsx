import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const TopTypePicker = ({ topType, topTypeTabs, setTopType }) => {
  return (
    <View style={styles.topTypeContainer}>
      {topTypeTabs.map((topTypeTab, index) => (
        <TouchableOpacity onPress={() => setTopType(topTypeTabs[index])}>
          <Text
            style={[
              styles.topTypeItem,
              {
                color:
                  topType === topTypeTabs[index] ? '#000000' : '#A0A6B1',
              },
            ]}>
            {topTypeTabs[index]}
          </Text>
          {topType === topTypeTabs[index] && (
            <View
              style={{
                alignSelf: 'center',
                height: 3,
                borderRadius: 10,
                width: 45,
                marginTop: 10,
                marginHorizontal: 'auto',
                backgroundColor:
                  topType === topTypeTabs[index] ? '#6574F7' : '',
              }}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  topTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 22,
    paddingVertical: 16,
    paddingBottom: 7,
    borderRadius: 12,
    elevation: 10,
    marginBottom: 80,
  },
  topTypeItem: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default TopTypePicker;
