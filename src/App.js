import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { View, withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from './components/Header'; 
import { Footer } from './components/Footer'; 
import Obituary from "./components/Obituary";
import LifeTimeline from "./components/LifeTimeline";
import PhotoGallery from "./components/PhotoGallery";
import { MemoryForm } from "./components/MemoryForm";
import { MemoryList } from "./components/MemoryList";
import { CondolenceForm } from "./components/CondolenceForm";
import { CondolenceList } from "./components/CondolenceList";
import { listMemories, listCondolences, listResponses } from "./graphql/queries";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const App = ({ signOut }) => {
  const [memories, setMemories] = useState([]);
  const [condolences, setCondolences] = useState([]);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    await fetchMemories();
    await fetchCondolences();
    await fetchResponses();
  };

  const fetchMemories = async () => {
    const apiData = await client.graphql({ query: listMemories });
    setMemories(apiData.data.listMemories.items);
  };

  const fetchCondolences = async () => {
    const apiData = await client.graphql({ query: listCondolences });
    setCondolences(apiData.data.listCondolences.items);
  };

  const fetchResponses = async () => {
    const apiData = await client.graphql({ query: listResponses });
    setResponses(apiData.data.listResponses.items);
  };

  return (
    <View className="App">
      <Header signOut={signOut} />
      <Obituary/>
      <PhotoGallery/>
      <LifeTimeline/>
      <MemoryForm onMemorySubmit={fetchAllData} />
      <MemoryList memories={memories} fetchMemories={fetchMemories} responses={responses} fetchResponses={fetchResponses} />
      <CondolenceForm onCondolenceSubmit={fetchCondolences} />
      <CondolenceList condolences={condolences} fetchCondolences={fetchCondolences} />
      <Footer/>
    </View>
  );
};

export default withAuthenticator(App);
