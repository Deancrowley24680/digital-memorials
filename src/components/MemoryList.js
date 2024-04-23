import React, { useState } from 'react';
import { Button, Flex, Heading, Text, Image, View } from '@aws-amplify/ui-react';
import { deleteMemory as deleteMemoryMutation, deleteResponse as deleteResponseMutation } from '../graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { remove } from 'aws-amplify/storage';
import { ResponseForm } from './ResponseForm';

const client = generateClient(); // GraphQL Client Instance

const MemoryItem = ({ memory, responses, deleteMemory, deleteResponse, fetchResponses }) => { // Indivdual Memory
  const [showResponses, setShowResponses] = useState(false); // State for Toggling Visibilty

  return (
    // Container for Memory that Needs Either id or name for the Key - Culminates in Toggle Button
    <View key={memory.id || memory.name} position="relative" backgroundColor="white" boxShadow="medium" borderRadius="medium" padding="2rem" margin="1rem" border="1px solid #ccc" maxWidth="600px" width="100%">
      <Button onClick={() => deleteMemory(memory)} position="absolute" top="0.5rem" right="0.5rem" variation="link" size="small">Remove</Button>
      <Flex direction="column" gap="1rem" alignItems="center">
        <Heading level={3} style={{ margin: '0.5rem 0' }}>{memory.name}</Heading> 
        <Text style={{ textAlign: 'center', fontSize: '1.25rem', margin: '0.5rem 0' }}>{memory.comment}</Text>
        {memory.image && ( // Displays the Image if it Exists for Particular Memory
          <View style={{ width: '100%', maxWidth: '500px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '1rem' }}>
            <Image src={memory.image} alt={`Visual aid for ${memory.name}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </View>
        )} 
        <Button onClick={() => setShowResponses(!showResponses)}>{showResponses ? 'Hide Responses' : 'Show Responses'}</Button>
      </Flex>
      {showResponses && ( // Displays the Responses Once Active - Generates Heading if Responses are Found
        <View padding="1rem" borderTop="1px solid #eee" marginTop="1rem" backgroundColor="#f8f8f8">
          {responses.filter(response => response.memoryId === memory.id).length > 0 && (
            <Heading level={6} style={{ fontSize: '1rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>Replies</Heading>
          )}
          <Flex direction="column" gap="0.5rem">
            {responses.filter(response => response.memoryId === memory.id).map((response) => ( // Flex Container for Each Response Showing Name and Comment - Response Form Component Imported
              <Flex key={response.id} direction="row" alignItems="center" justifyContent="space-between" style={{ padding: '0.5rem', border: '1px solid #eee', borderRadius: '8px', margin: '0.5rem 0' }}>
                <Flex direction="column">
                  <Text style={{ fontWeight: 600 }}>{response.name}</Text>
                  <Text style={{ fontSize: '0.875rem' }}>{response.comment}</Text>
                </Flex>
                <Button onClick={() => deleteResponse(response.id)} variation="link" size="small">Delete</Button>
              </Flex>
            ))} 
          </Flex>
          <ResponseForm memoryId={memory.id} onResponseSubmit={fetchResponses} style={{ fontSize: '0.875rem', marginTop: '1rem' }} /> 
        </View>
      )} 
    </View>
  );
};

export const MemoryList = ({ memories, responses, fetchMemories, fetchResponses }) => { // Componemt to Handle Listing of Memories

  async function deleteMemory({ id, name }) { // Function to Delete Memories
    if (name) await remove({ key: name }); // Removes the Image File if Present
    await client.graphql({ // Preforms the GraphQL Mutation to Delete a Memory in the Database
      query: deleteMemoryMutation,
      variables: { input: { id } },
    });
    fetchMemories(); 
    fetchResponses();
  }

  async function deleteResponse(responseId) { // Function to Delete Responses
    await client.graphql({ // Preforms the GraphQL Mutation to Delete a Response in the Database
      query: deleteResponseMutation,
      variables: { input: { id: responseId } },
    });
    fetchResponses();
  }

  return ( // Returns the List of Memory Items
    <Flex direction="column" alignItems="center" margin="3rem 0">
      {memories.map((memory) => (
        <MemoryItem 
          key={memory.id || memory.name}
          memory={memory}
          responses={responses}
          deleteMemory={deleteMemory}
          deleteResponse={deleteResponse}
          fetchResponses={fetchResponses}
        />
      ))}
    </Flex>
  );
};
