import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';

export default function OnboardingCard({ title, description, queuePosition, onSubmit }) {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
      return;
    }
    Alert.alert('Request access', 'Your request has been recorded.');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{description}</Text>
      <Text style={styles.queue}>Queue position: {queuePosition}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6A6A6A"
          keyboardType="email-address"
          accessibilityLabel="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#6A6A6A"
          keyboardType="phone-pad"
          accessibilityLabel="Phone"
        />
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonLabel}>Request Access</Text>
        </Pressable>
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
  title: { fontSize: 20, fontWeight: '600', color: '#000000' },
  subtitle: { marginTop: 8, fontSize: 14, color: '#4A4A4A', lineHeight: 20 },
  queue: { marginTop: 8, fontSize: 13, color: '#4A4A4A' },
  form: { marginTop: 12 },
  input: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    marginBottom: 10,
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 48,
    borderRadius: 12,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.85 },
  buttonLabel: { color: '#FFFFFF', fontWeight: '600', fontSize: 15 },
});
