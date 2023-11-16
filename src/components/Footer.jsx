import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
