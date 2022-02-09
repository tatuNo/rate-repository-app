import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
});

const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  
  const toThousands = number => {
    return number >= 1000 ? `${Math.round(number / 100 ) / 10.0}k` : number;
  };

  return(
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text testID="stargazersCount" fontWeight="bold">{toThousands(stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text testID="forksCount" fontWeight="bold">{toThousands(forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text testID="reviewCount"fontWeight="bold">{reviewCount}</Text>
        <Text color="textSecondary">Review</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text testID="ratingAverage" fontWeight="bold">{ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;