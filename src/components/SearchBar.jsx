import React from 'react';
import { StyleSheet } from 'react-native';

import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  searchBar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});


const SearchBar = ({ setSearchQuery, searchQuery }) => {
  
  const onChangeSearch = query => setSearchQuery(query);

  return(
    <Searchbar
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;