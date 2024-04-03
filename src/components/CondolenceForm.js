import React from 'react';
import { Button, Flex, TextField, View, Heading } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { createCondolence as createCondolenceMutation } from '../graphql/mutations';

const client = generateClient();

export const CondolenceForm = ({ onCondolenceSubmit }) => {
  async function createCondolence(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      comment: form.get("comment"),
    };
    await client.graphql({
      query: createCondolenceMutation,
      variables: { input: data },
    });
    onCondolenceSubmit(); 
    event.target.reset();
  }

  return (
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
