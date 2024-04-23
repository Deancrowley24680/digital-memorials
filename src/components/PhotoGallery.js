import React, { useState } from 'react';
import { View, Image, Text } from '@aws-amplify/ui-react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

const photos = [ // Array for Storing Images for Gallery
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

const PhotoGallery = () => { // Component to Display the Gallery Feature
  const [hoverIndex, setHoverIndex] = useState(null); // State to Track Which Image is Being Hovered Over

  return ( // Container for Gallery
    <View style={styles.wrapper}>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.galleryContainer}>
        {photos.map((photo, index) => ( // Container for Each Photo - Maps Over Each Photo in Array & Apply a Hover Transformation 
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
 
const styles = { // Styles Object for Each Component Element 
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
