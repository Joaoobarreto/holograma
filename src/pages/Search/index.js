import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons package
import { hologramas } from '../../data/data';
import HoloList from '../../components/HoloList';

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredHologramas, setFilteredHologramas] = React.useState(hologramas);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const searchHologramas = (query) => {
    const filtered = hologramas.filter((holograma) =>
      holograma.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHologramas(filtered);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    searchHologramas(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise por um holograma"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <FontAwesome name="search" size={20} color="blue" style={styles.searchIcon} />
        </View>
      </View>
      <HoloList items={filteredHologramas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100, // Adjust the value as needed
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1, // Take up remaining space
  },
  searchIcon: {
    marginRight: 10,
    position: 'absolute',
    right: 10, // Adjust the value as needed
  },
});
