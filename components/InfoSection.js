import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoSection({ memberId, availability }) {
  return (
    <View>
      <Text style={styles.title}>{memberId}</Text>
      <Text style={styles.subtitle}>{availability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '600', color: '#000000' },
  subtitle: { marginTop: 4, fontSize: 14, color: '#4A4A4A' },
});
