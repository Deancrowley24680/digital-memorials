/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCondolence = /* GraphQL */ `
  mutation CreateCondolence(
    $input: CreateCondolenceInput!
    $condition: ModelCondolenceConditionInput
  ) {
    createCondolence(input: $input, condition: $condition) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCondolence = /* GraphQL */ `
  mutation UpdateCondolence(
    $input: UpdateCondolenceInput!
    $condition: ModelCondolenceConditionInput
  ) {
    updateCondolence(input: $input, condition: $condition) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCondolence = /* GraphQL */ `
  mutation DeleteCondolence(
    $input: DeleteCondolenceInput!
    $condition: ModelCondolenceConditionInput
  ) {
    deleteCondolence(input: $input, condition: $condition) {
      id
      name
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMemory = /* GraphQL */ `
  mutation CreateMemory(
    $input: CreateMemoryInput!
    $condition: ModelMemoryConditionInput
  ) {
    createMemory(input: $input, condition: $condition) {
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
export const updateMemory = /* GraphQL */ `
  mutation UpdateMemory(
    $input: UpdateMemoryInput!
    $condition: ModelMemoryConditionInput
  ) {
    updateMemory(input: $input, condition: $condition) {
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
export const deleteMemory = /* GraphQL */ `
  mutation DeleteMemory(
    $input: DeleteMemoryInput!
    $condition: ModelMemoryConditionInput
  ) {
    deleteMemory(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
