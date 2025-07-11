import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>My Dashboard</Text>
        <TouchableOpacity>
          <LinearGradient
            colors={['#FB9B8C', '#CE6CD4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBg}
          >
            <Text style={styles.customizeText}>CUSTOMIZE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  customizeText: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  gradientBg: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#2A2F32',
    height: 500,
    width: '100%',
    borderRadius: 12,
  },
}); 