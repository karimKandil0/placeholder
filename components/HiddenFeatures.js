import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HiddenFeatures({ items }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Hidden features</Text>
      <View style={styles.list}>
        {items.map((item) => (
          <View key={item.title} style={styles.row}>
            <View style={styles.textBlock}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
            <View style={styles.lockBadge}>
              <Text style={styles.lockText}>Locked</Text>
            </View>
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
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  textBlock: { flex: 1, marginRight: 12 },
  itemTitle: { fontSize: 14, fontWeight: '600', color: '#000000' },
  detail: { marginTop: 2, fontSize: 12, color: '#4A4A4A', lineHeight: 18 },
  lockBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#000000',
  },
  lockText: { fontSize: 12, fontWeight: '600', color: '#000000' },
});
