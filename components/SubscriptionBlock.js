import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubscriptionBlock({ currentState, nextCharge, paymentMethod }) {
  const states = [
    { label: 'Active', description: 'Billing monthly and in good standing.' },
    { label: 'Trial', description: 'No charge during trial; renew to stay in.' },
    { label: 'Expired', description: 'Access locked until payment resumes.' },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Subscription</Text>
        <Text style={styles.stateLabel}>{currentState}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.muted}>Next charge</Text>
        <Text style={styles.value}>{nextCharge}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.muted}>Payment method</Text>
        <Text style={styles.value}>{paymentMethod}</Text>
      </View>
      <View style={styles.divider} />
      {states.map((item) => (
        <View key={item.label} style={styles.stateRow}>
          <Text style={styles.stateTitle}>{item.label}</Text>
          <Text style={styles.stateDetail}>{item.description}</Text>
        </View>
      ))}
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '600', color: '#000000' },
  stateLabel: { fontSize: 14, fontWeight: '600', color: '#000000' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  muted: { fontSize: 13, color: '#4A4A4A' },
  value: { fontSize: 14, color: '#000000', fontWeight: '500' },
  divider: { marginVertical: 12, borderBottomWidth: 1, borderBottomColor: '#EAEAEA' },
  stateRow: { marginBottom: 10 },
  stateTitle: { fontSize: 14, fontWeight: '600', color: '#000000' },
  stateDetail: { marginTop: 2, fontSize: 13, color: '#4A4A4A', lineHeight: 18 },
});
