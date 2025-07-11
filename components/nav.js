import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home-outline" size={24} color="#fff"/>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="heart-outline" size={24} color="#fff" style={{opacity: 0.6}}/>
        <Text style={styles.navText}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="people-outline" size={24} color="#fff" style={{opacity: 0.6}}/>
        <Text style={styles.navText}>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="menu-outline" size={24} color="#fff" style={{opacity: 0.6}}/>
        <Text style={styles.navText}>More</Text>
      </TouchableOpacity>
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name="add" size={32} color="#23282C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#111518',
    paddingVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    color: '#fff',
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 1,
  },
  fabContainer: {
    position: 'absolute',
    right: 8,
    bottom: 94,
    zIndex: 101,
  },
  fabButton: {
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});
