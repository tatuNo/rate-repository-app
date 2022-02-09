import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (values) => {
    const review = {
      ...values,
      rating: parseInt(values.rating),
    };

    const { data } = await mutate({ variables: { review }}); 
    return data.createReview;
  };

  return [createReview, result];
};

export default useCreateReview;