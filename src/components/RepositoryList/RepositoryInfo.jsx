import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    paddingBottom: 10,
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 8,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flex: 1,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: theme.borders.radiusCircle,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: theme.borders.radiusRectangle,
    marginTop: 10,
  },
  description: {
    paddingTop: 5,
  },
});

const RepositoryInfo = ({ description, ownerAvatarUrl, language, fullName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
      </View>
      <View style={styles.infoContainer}>
        <Text fontSize="subheading" fontWeight="bold">{fullName}</Text>
        <Text style={styles.description} color="textSecondary">{description}</Text>
        <Text style={styles.language} color="textButton">{language}</Text>
      </View>
    </View>
  );
};

export default RepositoryInfo;