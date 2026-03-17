import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileStub({ name, handle, contact, notifications }) {
  const rows = [
    { label: 'Name', value: name },
    { label: 'Handle', value: handle },
    { label: 'Contact', value: contact },
    { label: 'Notifications', value: notifications },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.list}>
        {rows.map((row) => (
          <View key={row.label} style={styles.row}>
            <Text style={styles.label}>{row.label}</Text>
            <Text style={styles.value}>{row.value}</Text>
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
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  label: { fontSize: 13, color: '#4A4A4A' },
  value: { fontSize: 14, color: '#000000', fontWeight: '500' },
});
