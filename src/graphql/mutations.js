import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($user: CreateUserInput) {
    createUser(user: $user) {
      username
      id
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($id: ID!) {
    deleteReview(id: $id)
  }
`;