import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tracker from '../assets/tracker.png';

export default function TitleBar({ displayDate }) {
  return (
    <View style={styles.titlebar}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.date}>
        <View style={styles.dateContainer}>
          <Ionicons name="chevron-back" size={20} color="#fff" style={styles.arrowIcon} />
          <Text style={styles.dateText}>{displayDate}</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" style={styles.arrowIcon} />
        </View>
      </View>
      <View style={styles.icon}>
        <Text style={styles.iconText}>--%</Text>
        <Image source={tracker} style={styles.iconImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titlebar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  profile: {
    flex: 1,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  date: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F393E',
    borderRadius: 16,
  },
  dateText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#444D51',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  arrowIcon: {
    paddingHorizontal: 8,
    color: '#fff',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.6,
  },
  iconImage: {
    width: 28,
    height: 28,
    marginLeft: 2,
    marginTop: -8
  },
});
