import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS, CORE_PAGE_INFO_FIELDS, CORE_REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  ${CORE_PAGE_INFO_FIELDS}
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
      edges {
        cursor
        node {
          ...CoreRepositoryFields
        }
      }
      pageInfo {
        ...CorePageInfoFields
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  ${CORE_PAGE_INFO_FIELDS}
  ${CORE_REVIEW_FIELDS}
  query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      url
      ...CoreRepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          cursor
          node {
            ...CoreReviewFields
          }
        }
        pageInfo {
          ...CorePageInfoFields
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  ${CORE_PAGE_INFO_FIELDS}
  ${CORE_REVIEW_FIELDS}
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews){
        edges {
          cursor
          node {
            ...CoreReviewFields
          }
        }
        pageInfo {
          ...CorePageInfoFields
        }
      }
    }
  }
`;

