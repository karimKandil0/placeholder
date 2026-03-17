import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeeklyStates({ states }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Weekly states</Text>
      <View style={styles.list}>
        {states.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.detail}</Text>
            <Text style={styles.hint}>{item.hint}</Text>
          </View>
        ))}
      </View>
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
  title: { fontSize: 18, fontWeight: '600', color: '#000000' },
  list: { marginTop: 10 },
  row: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#000000' },
  value: { marginTop: 4, fontSize: 14, color: '#000000' },
  hint: { marginTop: 2, fontSize: 12, color: '#4A4A4A' },
});
