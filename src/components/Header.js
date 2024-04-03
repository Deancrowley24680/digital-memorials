import React from 'react';
import { View, Image, Heading, Text, Button } from '@aws-amplify/ui-react';
import Picture from '../images/JohnSmith.jpg';

export const Header = ({
  name = 'John Smith',
  lifespan = '1950 - 2024',
  message = 'A loving memory to be cherished forever',
  signOut 
}) => {
  return (
    <View
      as="header"
      padding="3rem"
      backgroundColor="#d2b48c" 
      style={{ borderBottom: '2px solid #b38b59', marginBottom: '2.5rem', position: 'relative' }} 
    >
      <Button onClick={signOut} style={{
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          background: 'transparent', 
          color: 'white', 
        }}>Sign Out</Button>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center', 
          gap: '3rem',
        }}
      >
        <Image
          src={Picture}
          alt={`${name}`}
          style={{
            width: '360px',
            height: '360px',
            borderRadius: '0%',
            objectFit: 'cover',
            border: '4px solid #b38b59', 
            padding: '4px',
            marginLeft: '15%' 
          }}
        />
        <View style={{ flex: 1, marginLeft: '-5%' }}> 
          <Heading level={1} style={{ margin: '0', color: 'white', fontSize: '66px' }}> 
            {name}
          </Heading>
          <Text style={{ margin: '0.5rem 0 1.5rem 0', fontSize: '22px', color: 'white' }}> 
            {lifespan}
          </Text>
          <Text style={{ fontStyle: 'italic', color: 'white', fontSize: '27px' }}> 
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};
