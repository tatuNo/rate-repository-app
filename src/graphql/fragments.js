import { gql } from '@apollo/client';

export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
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
`;

export const CORE_PAGE_INFO_FIELDS = gql `
  fragment CorePageInfoFields on PageInfo {
    hasNextPage
    startCursor
    endCursor
  }
`;

export const CORE_REVIEW_FIELDS = gql`
  fragment CoreReviewFields on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    } 
    repository {
      id
      fullName
    } 
  }
`;