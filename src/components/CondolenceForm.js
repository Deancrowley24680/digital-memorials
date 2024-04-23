import React from 'react';
import { Button, Flex, TextField, View, Heading } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createCondolence as createCondolenceMutation } from '../graphql/mutations';

const client = generateClient(); // GraphQL Client Instance

export const CondolenceForm = ({ onCondolenceSubmit }) => { // Component to Handle Creation of Condolences

  async function createCondolence(event) { // Function to Handle Form Submission
    event.preventDefault(); // Stops Default From Submission Behaviour 
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"), // Retrieves Name Field from Form
      comment: form.get("comment"), // Retrieves Comment Field from Form
    };
    await client.graphql({ // Preforms the GraphQL Mutation to Create a Condolence in the Database
      query: createCondolenceMutation,
      variables: { input: data },
    });

    onCondolenceSubmit(); // Prop to Fetch Current Condolnces 
    event.target.reset(); // Reset Form Fields
    
  }

  return ( // Returns the Form
    <View as="form" margin="3rem 0" onSubmit={createCondolence}>
      <Heading level={1} style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>Book of Condolences</Heading>
      <Flex direction="row" justifyContent="center">
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          labelHidden
          variation="quiet"
          required
        />
        <TextField
          name="comment"
          placeholder="Message"
          label="Comment"
          labelHidden
          variation="quiet"
          required
        />
        <Button type="submit" variation="primary">Create Condolence</Button>
      </Flex>
    </View>
  );
};
