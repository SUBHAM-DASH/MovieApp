import React, { useState } from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrendingMovies from './components/TrendingMovies';
import MoviewList from './components/MoviewList';

const ios = Platform.OS === 'ios';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upcomingMovie,setUpcomingMovie] = useState([1, 2, 3, 4, 5]);
  const [topRated,setToprated] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={{ backgroundColor: '#000', flex: 1, paddingVertical: 10 }}>
      <SafeAreaView style={{ marginBottom: ios ? -2 : 3 }}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => console.log('Left sidebar clicked')}>
            <Icon name="bars" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.textContent}>
            <Text style={styles.movieLetter}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <Icon name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* treading movie carousal */}
        <TrendingMovies treading={trending} />

        {/* upcoming movie */}
        <MoviewList title="Upcoming" upcomingMovie={upcomingMovie}/>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  textContent: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  movieLetter: {
    color: '#eab308',
  },
});
