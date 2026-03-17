import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function MembershipCard({ status, renewal, plan, onManage }) {
  const handleManage = () => {
    if (onManage) {
      onManage();
      return;
    }
    Alert.alert('Membership', 'Manage membership coming soon.');
  };

  return (
    <View style={styles.card} accessibilityRole="summary">
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Membership</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{status}</Text>
        </View>
      </View>
      <Text style={styles.detail}>{plan} plan</Text>
      <Text style={styles.detail}>{renewal}</Text>
      <View style={styles.divider} />
      <Pressable accessibilityRole="button" style={({ pressed }) => [styles.manage, pressed && styles.pressed]} onPress={handleManage}>
        <Text style={styles.manageText}>Manage</Text>
      </Pressable>
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
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '600', color: '#000000' },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  badgeText: { fontSize: 12, fontWeight: '600', color: '#000000' },
  detail: { marginTop: 8, fontSize: 14, color: '#4A4A4A' },
  divider: { marginVertical: 12, borderBottomWidth: 1, borderBottomColor: '#EAEAEA' },
  manage: {
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.85 },
  manageText: { fontSize: 14, fontWeight: '600', color: '#000000' },
});
