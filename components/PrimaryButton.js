import React from 'react';
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';

export default function PrimaryButton({ label, sublabel, onPress }) {
  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }
    Alert.alert(label, 'Action coming soon.');
  };

  return (
    <View>
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={handlePress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.8 },
  label: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', letterSpacing: 0.6 },
  sublabel: { marginTop: 8, textAlign: 'center', color: '#4A4A4A', fontSize: 14, fontWeight: '500' },
});
