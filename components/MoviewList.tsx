import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const MoviewList = ({ title, upcomingMovie }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={{ color: '#eab308',fontWeight:'600' }}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoviewList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',

  },
});
