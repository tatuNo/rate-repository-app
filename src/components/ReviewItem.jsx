import React from 'react';
import { StyleSheet, View } from 'react-native';

import { format } from 'date-fns';
import { useMutation } from '@apollo/client';

import theme from '../theme';
import Text from './Text';
import ReviewItemActions from './ReviewItemActions';
import { DELETE_REVIEW } from '../graphql/mutations';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 8,
    backgroundColor: theme.colors.backgroundColorSecondary,
  },
  rating: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  infoContainerA: {
    display: 'flex',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
  infoContainerB: {
    flex: 1,
  },
  date: {
    marginTop: 5,
    marginBottom: 5,
  },
});

const ReviewItem = ({ review, name, actions, refetch }) => {
  const {
    id,
    rating,
    text,
    createdAt,
  } = review;

  const [mutate] = useMutation(DELETE_REVIEW);

  const handleDelete = async () => {
    try {
      await mutate({ variables: { id }});
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const repositoryId = review.repository.id;
  
  return (
    <View style={styles.container}>
      <View style={styles.infoContainerA}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">{rating}</Text>
        </View>
        <View style={styles.infoContainerB}>
          <Text fontSize="subheading" fontWeight="bold">{name}</Text>
          <Text style={styles.date} color="textSecondary">{format(new Date(createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      { actions && <ReviewItemActions repositoryId={repositoryId} handleDelete={handleDelete} /> }
    </View>
  );
};

export default ReviewItem;