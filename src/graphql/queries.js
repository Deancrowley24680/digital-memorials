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
      responses {
        nextToken
        __typename
      }
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
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      memoryId
      memory {
        id
        name
        comment
        image
        createdAt
        updatedAt
        __typename
      }
      comment
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        memoryId
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
export const responsesByMemoryIdAndCreatedAt = /* GraphQL */ `
  query ResponsesByMemoryIdAndCreatedAt(
    $memoryId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesByMemoryIdAndCreatedAt(
      memoryId: $memoryId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memoryId
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
