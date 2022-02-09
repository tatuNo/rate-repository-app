import { useQuery } from '@apollo/client';

import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (variables) => {

  const { data, refetch } = useQuery(GET_CURRENT_USER, {
    variables,
  });

  return {
    user: data?.me,
    refetch: refetch,
  };
};

export default useCurrentUser;