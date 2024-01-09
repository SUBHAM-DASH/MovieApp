import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');
const TrendingMovies = ({ trending }: any) => {
  
  const navigation = useNavigation();
  const handleClick = () => {
    // navigation.navigate('Movie', );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trendingHeading}>Trending</Text>
      <Carousel
        data={trending}
        renderItem={({ item }) => (
          <MovieCard
            item={item}
            handleClick={handleClick}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

function MovieCard({ item, handleClick }: any) {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require('../assets/images/testalbumimage.jpg')}
        style={{ width: width * 0.6, height: height * 0.4, borderRadius: 15 }}
      />
    </TouchableWithoutFeedback>
  );
}

export default TrendingMovies;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  trendingHeading: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 10,
    marginHorizontal:15
  },
});
