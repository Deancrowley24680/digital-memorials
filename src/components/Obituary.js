import React from 'react';
import { View, Text } from '@aws-amplify/ui-react';


const Obituary = () => {
  return (
    <View style={styles.container}>
      <Text as="h1" style={styles.heading}>In Loving Memory</Text>
      <Text as="p" style={styles.paragraph}>
        John Smith, aged 74, of Tramore, Waterford, Ireland, peacefully departed this world on January 1, 2024, surrounded by the warmth of his loved ones.
      </Text>
      <Text as="p" style={styles.paragraph}>
        Born on a brisk New Year’s Day in 1950 in Tramore, Waterford, John was the beloved son of Patrick and Siobhan Smith. Raised along the picturesque Irish coastline, John's childhood was marked by the wild beauty of the sea and the close-knit community of his hometown.
      </Text>
      <Text as="p" style={styles.paragraph}>
        John and Aisling were blessed with three children: Eoin, born in 1981, Niamh, born in 1984, and Ciara, born in 1987. As a father, John was deeply engaged, nurturing, and ever-present. He passed on his love for Irish culture and history to his children, ensuring they knew the rich tapestry of their heritage.
      </Text>
      <Text as="p" style={styles.paragraph}>
        Special thanks are extended to John's caregivers during his final days, whose kindness and dedication were a great comfort. We also express our gratitude to the extended family and friends who supported us with love and care during this difficult time.
      </Text>
    </View>
  );  
};

const styles = {
    container: {
      padding: '3rem',
      maxWidth: '900px',
      margin: 'auto',
      textAlign: 'center',
    },
    heading: {
      paddingBottom: '2rem',
      fontSize: '2.5rem',
      textAlign: 'center',
    },
    paragraph: {
      padding: '0.375rem 0.75rem',
      fontSize: '1.85rem',
      lineHeight: '1.5',
      margin: '1rem 0',
      width: 'calc(100% - 1.5rem)', 
    },
  };

export default Obituary;
