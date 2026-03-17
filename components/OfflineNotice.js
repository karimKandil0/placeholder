import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OfflineNotice({ message }) {
  return (
    <View style={styles.card} accessibilityRole="alert">
      <Text style={styles.title}>Status</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: { fontSize: 16, fontWeight: '600', color: '#000000' },
  message: { marginTop: 6, fontSize: 13, color: '#4A4A4A', lineHeight: 18 },
});
