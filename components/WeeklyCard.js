import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WeeklyCard({ title, status, selector }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.selector}>{selector}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: { fontSize: 18, fontWeight: '600', color: '#000000' },
  status: { marginTop: 12, fontSize: 16, fontWeight: '500', color: '#000000' },
  selector: { marginTop: 6, fontSize: 12, color: '#4A4A4A' },
});
