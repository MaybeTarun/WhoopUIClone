import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Popup({ text, visible, onClose }) {
  if (!visible) return null;

  return (
    <View style={styles.popupContainer}>
      <View style={styles.popup}>
        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    top: 40,
    width: '100%',
    alignItems: 'center',
    zIndex: 100,
    elevation: 4,
  },
  popup: {
    width: '80%',
    backgroundColor: '#444D51',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 108
  },
  text: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
