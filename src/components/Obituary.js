import React from 'react';
import { View, Text } from '@aws-amplify/ui-react';


const Obituary = () => {
  return (
    <View style={styles.container}>
      <Text as="h1" style={styles.heading}>In Loving Memory</Text>
      <Text as="p" style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  );
};

const styles = {
    container: {
      padding: '3rem',
      backgroundColor: 'white',
      maxWidth: '900px',
      margin: 'auto',
      textAlign: 'center',
    },
    heading: {
      paddingBottom: '2rem',
      fontSize: '2rem',
      textAlign: 'center',
    },
    paragraph: {
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      margin: '1rem 0',
      width: 'calc(100% - 1.5rem)', 
    },
  };

export default Obituary;
