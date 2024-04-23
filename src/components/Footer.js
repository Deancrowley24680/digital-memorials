import React from 'react';
import { View, Text } from '@aws-amplify/ui-react';

export const Footer = ({ text = '© 2024 Digital Memorials. All rights reserved.' }) => {  // Footer Component with Default Property and Styling
  return (
    <View
      as="footer"
      backgroundColor="#b38b59" 
      style={{
        marginTop: '3rem', 
        padding: '1rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  );
};
