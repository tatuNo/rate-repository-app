import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import Text from './Text';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import useSingleRepository from '../hooks/useSingleRepository';
import ReviewItem from './ReviewItem';



const RepositoryInfo = ({ repository }) => {
  return (
    <>
    <RepositoryItem repository={repository} showGit />
    <ItemSeparator />
    </>
  );
};


const SingleRepository = () => {
  const repositoryId = useParams();
  const { repository, reviews, fetchMore } = useSingleRepository({
    first: 10,
    ...repositoryId
  });

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  if(!repository) {
    return <Text>Loading...</Text>;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return(
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} name={item.user.username} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;