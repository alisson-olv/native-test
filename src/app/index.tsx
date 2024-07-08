import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayCircle from '../components/playCircle';
import SectionTitle from '../components/sectionTitle';
import MovieCard from '../components/movieCard';
import { MOVIESWATCHING } from '../utils/moviesWatching';
import { MOVIESCRIME } from '../utils/moviesCrimes';
import { MOVIESWATCH } from '../utils/moviesWatch';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/prime_video.png')} />
      </View>

      <View style={styles.category}>
        <Pressable>
          <Text style={styles.categoryText}>Home</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.categoryText}>TV Shows</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.categoryText}>Movies</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.categoryText}>Kids</Text>
        </Pressable>
      </View>

      <ScrollView>
        <Pressable style={styles.movieImageThumbnail}>
          <Image
            style={styles.movieWatchNow}
            source={require('../assets/movies/the_wheel_of_time.png')}
          />
          <View style={styles.movieWatchPlay}>
            <PlayCircle size={30} color='white' />
            <Text style={styles.movieWatchNowText}>Watch Now</Text>
          </View>
        </Pressable>

        <SectionTitle>Continue Watching</SectionTitle>
        <FlatList
          data={MOVIESWATCHING}
          renderItem={({ item }) => <MovieCard imageUrl={item.moviesURL} />}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.moviesList}
          showsHorizontalScrollIndicator={false}
        />

        <SectionTitle>Crime Movies</SectionTitle>
        <FlatList
          data={MOVIESCRIME}
          renderItem={({ item }) => <MovieCard imageUrl={item.moviesURL} />}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.moviesList}
          showsHorizontalScrollIndicator={false}
        />

        <SectionTitle>Watch in your language</SectionTitle>
        <FlatList
          data={MOVIESWATCH}
          renderItem={({ item }) => <MovieCard imageUrl={item.moviesURL} />}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.moviesList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232f3e',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: {
    color: '#9C9C9C',
    fontWeight: '700',
    fontSize: 16,
  },
  movieImageThumbnail: {
    width: '100%',
  },
  movieWatchNow: {
    width: '100%',
    position: 'relative',
  },
  movieWatchPlay: {
    position: 'absolute',
    right: 50,
    top: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  movieWatchNowText: {
    color: '#fff',
    fontSize: 20,
  },
  moviesList: {
    marginHorizontal: 10,
    gap: 10,
  },
});
