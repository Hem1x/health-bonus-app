import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import king from '../assets/images/king.png';

const Top3 = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
      <View style={styles.container_2_3}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.textName}>Ruben</Text>
          <Text style={[styles.textScore, { color: 'silver' }]}>1345</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textName}>Николай</Text>
          <Text style={[styles.textScore, { color: '#CD9E6F' }]}>
            1345
          </Text>
        </View>
      </View>
      <View style={styles.container_1}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Image
            source={king}
            style={{ width: 34, height: 27, marginBottom: 10 }}
            resizeMode="contain"
          />
          <Text style={styles.textName}>Евгений</Text>
          <Text style={[styles.textScore, { color: 'gold' }]}>1679</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textName: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  textScore: {
    fontSize: 15,
    fontWeight: '900',
  },
  container_2_3: {
    width: '100%',
    height: 100,
    backgroundColor: '#354AFF',
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_1: {
    position: 'absolute',
    left: '34%',
    width: 100,
    height: 150,
    backgroundColor: '#1E3ECB',
    borderRadius: 30,
  },
});

export default Top3;
