import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Button, Flex, Heading, Text, TextField, Image, View, withAuthenticator,
} from "@aws-amplify/ui-react";
import { listMemories, listCondolences, listResponses } from "./graphql/queries";
import { createMemory as createMemoryMutation, deleteMemory as deleteMemoryMutation,
  createCondolence as createCondolenceMutation, deleteCondolence as deleteCondolenceMutation,
  createResponse as createResponseMutation, deleteResponse as deleteResponseMutation
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';

const client = generateClient();

const App = ({ signOut }) => {
  const [memories, setMemories] = useState([]);
  const [condolences, setCondolences] = useState([]);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchMemories();
    fetchCondolences();
    fetchResponses();
  }, []);

  async function fetchMemories() {
    const apiData = await client.graphql({ query: listMemories });
    const memoriesFromAPI = apiData.data.listMemories.items;
    await Promise.all(
      memoriesFromAPI.map(async (memory) => {
        if (memory.image) {
          const url = await getUrl({ key: memory.name });
          memory.image = url.url;  
        }
        return memory;
      })
    );
    setMemories(memoriesFromAPI);
  }

  async function fetchCondolences() {
    const apiData = await client.graphql({ query: listCondolences });
    const condolencesFromAPI = apiData.data.listCondolences.items;
    setCondolences(condolencesFromAPI);
  }

  async function fetchResponses() { 
    const apiData = await client.graphql({ query: listResponses });
    setResponses(apiData.data.listResponses.items);
  }

  async function createMemory(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      comment: form.get("comment"), 
      image: image.name,
    };
    if (!!data.image) await uploadData({
      key: data.name,
      data: image
    });
    await client.graphql({
      query: createMemoryMutation,
      variables: { input: data },
    });
    fetchMemories();
    event.target.reset();
  }

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
    fetchCondolences();
    event.target.reset();
  }

  async function createResponse(event, memoryId) { 
    event.preventDefault();
    const form = new FormData(event.currentTarget); 
    const comment = form.get("comment");
    const data = {
      memoryId,
      comment,
    };
    await client.graphql({
      query: createResponseMutation,
      variables: { input: data },
    });
    fetchResponses(); 
  }

  async function deleteMemory({ id, name }) {
    const newMemories = memories.filter((memory) => memory.id !== id);
    setMemories(newMemories);
    if (name) await remove({ key: name });
    await client.graphql({
      query: deleteMemoryMutation,
      variables: { input: { id } },
    });
  }

  async function deleteCondolence({ id }) {
    const newCondolences = condolences.filter((condolence) => condolence.id !== id);
    setCondolences(newCondolences);
    await client.graphql({
      query: deleteCondolenceMutation,
      variables: { input: { id } },
    });
  }

  async function deleteResponse(responseId) { 
    await client.graphql({
      query: deleteResponseMutation,
      variables: { input: { id: responseId } },
    });
    fetchResponses(); 
  }

  return (
    <View className="App">
  <Heading level={1}>Digital Memorials</Heading>
  <br></br>
  <Heading level={2}>Memories</Heading>
  <View as="form" margin="3rem 0" onSubmit={createMemory}>
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
        placeholder="Comment"
        label="Comment"
        labelHidden
        variation="quiet"
        required
      />
      <View
        name="image"
        as="input"
        type="file"
        style={{ alignSelf: "end" }}
      />
      <Button type="submit" variation="primary">
        Create Memory
      </Button>
    </Flex>
  </View>
  <View margin="3rem 0">
    {memories.map((memory) => (
      <Flex
      key={memory.id || memory.name}
      direction="column" 
      alignItems="center"
    >
      <Text as="strong" fontWeight={700}>
        {memory.name}
      </Text>
      <Text as="span">{memory.comment}</Text>
      {memory.image && (
        <Image
          src={memory.image}
          alt={`visual aid for ${memory.name}`}
          style={{ width: 400 }}
        />
      )}
      <Button variation="link" onClick={() => deleteMemory(memory)}>
        Delete memory
      </Button>
      {responses.filter(response => response.memoryId === memory.id).map((response) => (
        <Flex key={response.id} direction="row" alignItems="center" justifyContent="space-between">
          <Text>{response.comment}</Text>
          <Button onClick={() => deleteResponse(response.id)} variation="link" size="small">Delete</Button>
        </Flex>
      ))}
      <View as="form" onSubmit={(e) => createResponse(e, memory.id)}>
        <TextField
          name="comment"
          placeholder="Add a response..."
          label="Response"
          labelHidden
          variation="quiet"
          required
        />
        <Button type="submit" variation="primary">Submit Response</Button>
      </View>
    </Flex>
    ))}
  </View>
      <Heading level={2}>Book of Condolences</Heading>
      <View as="form" margin="3rem 0" onSubmit={createCondolence}>
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
            placeholder="Comment"
            label="Comment"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Condolence
          </Button>
        </Flex>
      </View>
      <View margin="3rem 0">
        {condolences.map((condolence) => (
          <Flex
            key={condolence.id || condolence.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {condolence.name}
            </Text>
            <Text as="span">{condolence.comment}</Text>
            <Button variation="link" onClick={() => deleteCondolence(condolence)}>
              Delete condolence
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
