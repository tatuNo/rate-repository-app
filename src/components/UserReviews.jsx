import React from 'react';
import { FlatList } from 'react-native';

import ItemSeparator from './ItemSeparator';
import ReviewItem from './ReviewItem';
import useCurrentUser from '../hooks/useCurrentUser';

const UserReviews = () => {
  const { user, refetch } = useCurrentUser({
    includeReviews: true,
  });

  const reviewNodes = user
    ? user.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} name={item.repository.fullName} refetch={refetch} actions />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;