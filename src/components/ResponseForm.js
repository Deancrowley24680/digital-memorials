import React from 'react';
import { Button, Flex, TextField, View } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createResponse as createResponseMutation } from '../graphql/mutations';

const client = generateClient(); // GraphQL Client Instance

export const ResponseForm = ({ memoryId, onResponseSubmit }) => { // Component for Submitting Responses to a Memory

  async function createResponse(event) { // Function to Handle Submission of a New Response
    event.preventDefault(); // Stops Default Form Submission Behaviour 
    const form = new FormData(event.target); // Collects Form Data
    const comment = form.get("comment"); // Retrieves Comment from Form Data
    const data = {
      memoryId, // Memory ID recieved as Prop
      comment,
    };
    await client.graphql({ // Preforms the GraphQL Mutation to Create a Response in the Database
      query: createResponseMutation,
      variables: { input: data },
    });
    onResponseSubmit(); // Prop to Fetch Current Responses
    event.target.reset(); // Reset Form Fields
  }

  return ( // Form for Response Submission
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
