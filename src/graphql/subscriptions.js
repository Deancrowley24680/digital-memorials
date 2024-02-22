/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCondolence = /* GraphQL */ `
  subscription OnCreateCondolence(
    $filter: ModelSubscriptionCondolenceFilterInput
  ) {
    onCreateCondolence(filter: $filter) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCondolence = /* GraphQL */ `
  subscription OnUpdateCondolence(
    $filter: ModelSubscriptionCondolenceFilterInput
  ) {
    onUpdateCondolence(filter: $filter) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCondolence = /* GraphQL */ `
  subscription OnDeleteCondolence(
    $filter: ModelSubscriptionCondolenceFilterInput
  ) {
    onDeleteCondolence(filter: $filter) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMemory = /* GraphQL */ `
  subscription OnCreateMemory($filter: ModelSubscriptionMemoryFilterInput) {
    onCreateMemory(filter: $filter) {
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
export const onUpdateMemory = /* GraphQL */ `
  subscription OnUpdateMemory($filter: ModelSubscriptionMemoryFilterInput) {
    onUpdateMemory(filter: $filter) {
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
export const onDeleteMemory = /* GraphQL */ `
  subscription OnDeleteMemory($filter: ModelSubscriptionMemoryFilterInput) {
    onDeleteMemory(filter: $filter) {
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
