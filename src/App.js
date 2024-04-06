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
  const [activeTab, setActiveTab] = useState('Obituary');
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

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Obituary':
        return <Obituary />;
      case 'Gallery':
        return <PhotoGallery />;
      case 'Timeline':
        return <LifeTimeline />;
      case 'Memories':
        return (
          <>
            <MemoryForm onMemorySubmit={fetchAllData} />
            <MemoryList memories={memories} fetchMemories={fetchMemories} responses={responses} fetchResponses={fetchResponses} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View className="App">
      <Header signOut={signOut} />
      <div className="tabs-container">
        <button className="tab-button" onClick={() => setActiveTab('Obituary')}>Obituary</button>
        <button className="tab-button" onClick={() => setActiveTab('Gallery')}>Gallery</button>
        <button className="tab-button" onClick={() => setActiveTab('Timeline')}>Timeline</button>
        <button className="tab-button" onClick={() => setActiveTab('Memories')}>Memories</button>
      </div>
      {renderActiveTab()}
      <CondolenceForm onCondolenceSubmit={fetchCondolences} />
      <CondolenceList condolences={condolences} fetchCondolences={fetchCondolences} />
      <Footer/>
    </View>
  );
};

export default withAuthenticator(App);
