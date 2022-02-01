import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
        id
        description
        ownerAvatarUrl
        language
        fullName
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
    }
  }
`;