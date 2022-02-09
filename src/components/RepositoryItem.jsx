import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import { useNavigate } from 'react-router-native';

import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 8,
    backgroundColor: theme.colors.backgroundColorSecondary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: theme.borders.radiusRectangle,
    marginTop: 8,
    textAlign: 'center'
  }
});

const RepositoryItem = ({ repository, showGit }) => {
  const navigate = useNavigate();
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repository;

  return(
    <View testID="repositoryItem" style={styles.container}>
      <Pressable onPress={(() => navigate(`/${id}`))}>
        <RepositoryInfo 
          description={description}
          ownerAvatarUrl={ownerAvatarUrl}
          language={language}
          fullName={fullName}
        /> 
        <RepositoryStats
          stargazersCount={stargazersCount}
          forksCount={forksCount}
          reviewCount={reviewCount}
          ratingAverage={ratingAverage}
        />
      </Pressable>
      { showGit &&
      <Pressable onPress={(() => Linking.openURL(url))}>
        <Text style={styles.button} color="textButton">
          Open in GitHub
        </Text>
      </Pressable>
      }
    </View>  
  );
};


export default RepositoryItem;