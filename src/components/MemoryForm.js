import React from 'react';
import { Button, Flex, TextField, View, Heading } from '@aws-amplify/ui-react';
import { uploadData, getUrl } from 'aws-amplify/storage';
import { generateClient } from 'aws-amplify/api';
import { createMemory as createMemoryMutation } from '../graphql/mutations';

const client = generateClient(); // GraphQL Client Instance

export const MemoryForm = ({ onMemorySubmit }) => { // Component to Handle Creation of Memories
    
  async function createMemory(event) { // Function to Handle Form Submission
    event.preventDefault(); // Stops Default Form Submission Behaviour 
    const form = new FormData(event.target); // Collects Form Data
    const image = form.get("image"); // Retrieves Image from Form Data
    let imageUrl = null;

    if (image && image.name) { // Handling Image Upload 
      const fileName = `${Date.now()}-${image.name}`; // Makes Unique Filename from Current Datetime
      await uploadData({
        key: fileName,
        data: image // Uploads the Image
      });
      const urlResponse = await getUrl({ key: fileName }); // Retrieves the URL of Uploaded Image
      imageUrl = urlResponse.url; // Stores URL so it can be Used in Mutation 
    }

    const data = {
      name: form.get("name"),
      comment: form.get("comment"), 
      image: imageUrl,
    };

    await client.graphql({ // Preforms the GraphQL Mutation to Create a Memory in the Database
      query: createMemoryMutation,
      variables: { input: data },
    });

    onMemorySubmit(); // Prop to Fetch Current Memories
    event.target.reset(); // Reset Form Fields
  }

  return ( 
    // Form Layout
    <View as="form" onSubmit={createMemory} padding="3rem" boxShadow="small" maxWidth="600px" margin="auto">
      <Heading level={1} style={{ paddingBottom: '2rem', textAlign: 'center' }}>Memory Wall</Heading>
      <Flex direction="column" gap="1rem">
        <TextField
          name="name"
          placeholder="Your Name"
          label="Your name"
          labelHidden
          outerStartComponent={<View paddingLeft="1rem" />}
          outerEndComponent={<View paddingRight="1rem" />}
          required
          style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.375rem 0.75rem' }}
        />
        <TextField
          name="comment"
          placeholder="Type Message Here"
          label="Memory"
          labelHidden
          outerStartComponent={<View paddingLeft="1rem" />}
          outerEndComponent={<View paddingRight="1rem" />}
          required
          multiline
          rows={3}
          style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.375rem 0.75rem' }}
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          multiple
          style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.375rem 0.75rem', display: 'block', width: '100%', margin: '1rem 0' }}
        />
        <Button type="submit" variation="primary" style={{ margin: '1rem 0' }}>
          Submit
        </Button>
      </Flex>
    </View>
  );
};
