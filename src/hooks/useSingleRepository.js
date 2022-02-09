import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (variables) => {
  const { data, fetchMore, loading, error, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };


  return {
    repository: data ? data.repository : undefined,
    reviews: data ? data.repository.reviews : undefined,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
};

export default useSingleRepository;