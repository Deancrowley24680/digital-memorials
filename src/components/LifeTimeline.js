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
    padding: '50px 20px',
    backgroundColor: '#f0f4f8', 
    width: '100%',
  },
  heading: {
    marginBottom: '40px',
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#007bff', 
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%', 
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%', 
    marginBottom: '60px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '5px 5px 20px rgba(0,0,0,0.05), -5px -5px 20px rgba(255,255,255,1)',
    padding: '20px',
    border: '1px solid #e7e9ec',
  },
  dateBubble: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px', 
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
    border: '2px solid #ffffff', 
    marginBottom: '-40px',
    zIndex: 1,
  },
  date: {
    color: 'white',
  },
  content: {
    textAlign: 'center',
    padding: '40px 20px',
    borderRadius: '15px',
    backgroundColor: 'white',
    width: '100%',
    boxShadow: 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff', // Inner shadow for a subtle inset effect
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.25rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default LifeTimeline;
