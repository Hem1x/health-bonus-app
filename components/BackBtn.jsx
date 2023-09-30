import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import left from '../assets/icons/left.png';
import { useNavigation } from '@react-navigation/native';

export default function BackBtn({ dimension, style }) {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.btnContainer, style]}
      onPress={() => navigate.goBack()}>
      <Image
        source={left}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12 / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
  }),
});
