import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function SettingsSection({ themeState, language, legalLinks, onPressSettings }) {
  const showComingSoon = (title) => {
    if (onPressSettings) {
      onPressSettings();
      return;
    }
    Alert.alert(title, 'This will be available soon.');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.list}>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.row, pressed && styles.pressed]}
          onPress={() => showComingSoon('Dark mode')}
        >
          <Text style={styles.label}>Dark mode</Text>
          <View style={styles.rowRight}>
            <Text style={styles.value}>{themeState}</Text>
            <Text style={styles.lock}>🔒</Text>
          </View>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.row, pressed && styles.pressed]}
          onPress={() => showComingSoon('Language')}
        >
          <Text style={styles.label}>Language</Text>
          <Text style={styles.value}>{language}</Text>
        </Pressable>
        {legalLinks.map((link) => (
          <Pressable
            key={link}
            accessibilityRole="button"
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}
            onPress={() => showComingSoon(link)}
          >
            <Text style={styles.label}>{link}</Text>
            <Text style={styles.value}>View</Text>
          </Pressable>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: { fontSize: 14, color: '#000000', fontWeight: '500' },
  value: { fontSize: 14, color: '#4A4A4A' },
  rowRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  lock: { fontSize: 14, color: '#000000' },
  pressed: { opacity: 0.85 },
});
