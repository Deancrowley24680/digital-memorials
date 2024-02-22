/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCondolence = /* GraphQL */ `
  query GetCondolence($id: ID!) {
    getCondolence(id: $id) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCondolences = /* GraphQL */ `
  query ListCondolences(
    $filter: ModelCondolenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCondolences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMemory = /* GraphQL */ `
  query GetMemory($id: ID!) {
    getMemory(id: $id) {
      id
      name
      comment
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMemories = /* GraphQL */ `
  query ListMemories(
    $filter: ModelMemoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        comment
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
