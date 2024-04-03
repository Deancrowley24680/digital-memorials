import React from 'react';
import { View, Text } from '@aws-amplify/ui-react';

const timelineEvents = [
  { date: '01-01-1950', title: 'Born', description: 'I was born in Tramore, Co.Waterford.' },
  { date: '05-05-1968', title: 'Graduated Secondary School', description: 'Graduated from Ard Scoil.' },
  { date: '20-06-1972', title: 'University Graduation', description: 'Received my Bachelor’s degree in Computer Science.' },
  { date: '29-09-1979', title: 'Married', description: 'Married my best friend in a beautiful ceremony.' },
];

const LifeTimeline = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Life Timeline</Text>
      <View style={styles.timelineContainer}>
        {timelineEvents.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <View style={styles.dateBubble}>
              <Text style={styles.date}>{event.date}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.description}>{event.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};


const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 50px',
    width: '100%',
  },
  heading: {
    marginBottom: '30px',
    fontSize: '2rem',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    marginBottom: '40px',
    backgroundColor: 'white', 
    borderRadius: '10px', 
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
  },
  dateBubble: {
    width: '100px', 
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-35px', 
    zIndex: 1, 
  },
  date: {
    color: 'white',
  },
  content: {
    textAlign: 'center',
    padding: '40px 20px',
    borderRadius: '10px', 
    backgroundColor: 'white', 
    width: '100%',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1rem', 
    color: '#555', 
  },
};

export default LifeTimeline;
