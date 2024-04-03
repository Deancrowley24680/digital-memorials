import React from 'react';
import { Button, Flex, Text, View } from '@aws-amplify/ui-react';
import { deleteCondolence as deleteCondolenceMutation } from '../graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import '@aws-amplify/ui-react/styles.css'; 

const client = generateClient();

export const CondolenceList = ({ condolences, fetchCondolences }) => {
  async function deleteCondolence({ id }) {
    await client.graphql({
      query: deleteCondolenceMutation,
      variables: { input: { id } },
    });
    fetchCondolences();
  }

  return (
    <View margin="3rem auto" maxWidth="600px" padding="2rem" backgroundColor="#fdf8e1" border="1px solid #ddd" borderRadius="5px" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {condolences.map((condolence, index) => (
        <Flex key={condolence.id || condolence.name} direction="column" alignItems="center" justifyContent="center" margin="2rem 0" padding="1rem" style={{ borderBottom: index !== condolences.length - 1 ? '1px solid #ccc' : 'none' }}>
          <Text as="p" style={{ fontStyle: 'italic', fontSize: '1.2rem', textAlign: 'center', margin: '1rem 0' }}>
            "{condolence.comment}"
          </Text>
          <Text as="p" style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>
            - {condolence.name}
          </Text>
          <Button variation="link" size="small" onClick={() => deleteCondolence(condolence)} style={{ color: '#999', fontSize: '0.875rem' }}>
            Delete condolence
          </Button>
        </Flex>
      ))}
    </View>
  );
};
