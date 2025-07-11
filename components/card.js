import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardIcon}>
        <Ionicons name="alert" size={22} color="#FD0026" />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>MEMBERSHIP EXPIRED</Text>
        <Text style={styles.cardSubtext}>Click here to reactivate your membership</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.cardArrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 28,
    elevation: 2,
  },
  cardIcon: {
    backgroundColor: '#2D1818',
    borderRadius: 8,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#FD0026',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  cardSubtext: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
    opacity: 0.6,
  },
  cardArrow: {
    marginLeft: 8,
  },
});
