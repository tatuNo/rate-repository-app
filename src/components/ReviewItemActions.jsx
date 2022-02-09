import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radiusRectangle,
    padding: 15,
    textAlign: 'center',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    borderRadius: theme.borders.radiusRectangle,
    padding: 15,
    textAlign: 'center',
  },
});

const ReviewItemActions = ({ repositoryId, handleDelete }) => {
  const navigate = useNavigate();

  return(
    <View style={styles.container}>
      <Pressable style={{flex: 1}} onPress={(() => navigate(`/${repositoryId}`))}>
        <Text style={styles.viewButton} fontWeight="bold" color="textButton">View repository</Text>
      </Pressable>
      <Pressable style={{flex: 1}} onPress={handleDelete}>
        <Text style={styles.deleteButton} fontWeight="bold" color="textButton">Delete review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewItemActions;