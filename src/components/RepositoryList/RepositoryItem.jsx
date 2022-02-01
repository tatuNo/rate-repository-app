import React from 'react';
import { View, StyleSheet } from 'react-native';

import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 8,
    backgroundColor: theme.colors.backgroundColorSecondary,
  },
});

const RepositoryItem = ({ item }) => {
  return(
    <View style={styles.container}>
      <RepositoryInfo 
        description={item.description}
        ownerAvatarUrl={item.ownerAvatarUrl}
        language={item.language}
        fullName={item.fullName}
      /> 
      <RepositoryStats
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>  
  );
};


export default RepositoryItem;