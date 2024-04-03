// ResponseForm.js
import React from 'react';
import { Button, Flex, TextField, View } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createResponse as createResponseMutation } from '../graphql/mutations';

const client = generateClient();

export const ResponseForm = ({ memoryId, onResponseSubmit }) => {
  async function createResponse(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const comment = form.get("comment");
    const data = {
      memoryId,
      comment,
    };
    await client.graphql({
      query: createResponseMutation,
      variables: { input: data },
    });
    onResponseSubmit();
    event.target.reset();
  }

  return (
    <View as="form" paddingTop="4rem" onSubmit={createResponse}>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <TextField
          name="comment"
          placeholder="Add a response..."
          label="Response"
          labelHidden
          variation="quiet"
          required
        />
        <Button type="submit" variation="primary">Submit Response</Button>
      </Flex>
    </View>
  );
};
