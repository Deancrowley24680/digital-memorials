import React, { useState } from 'react';
import { View, Image, Text } from '@aws-amplify/ui-react';
import Picture from '../images/JohnSmith.jpg';

const photos = [
  Picture,
  Picture,
  Picture,
];

const PhotoGallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.galleryContainer}>
        {photos.map((photo, index) => (
          <View
            key={index}
            style={{
              ...styles.photoContainer,
              transform: hoverIndex === index ? 'scale(1.05)' : 'none',
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Image src={photo} alt={`Photo ${index + 1}`} style={styles.photo} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    textAlign: 'center',
    padding: '50px 50px',
    maxWidth: '1000px',
    margin: 'auto',
  },
  title: {
    fontSize: '34px',
    marginBottom: '20px',
  },
  galleryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '10px',
  },
  photoContainer: {
    overflow: 'hidden',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default PhotoGallery;
