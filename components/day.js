import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Day() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Day</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>ACTIVITIES</Text>
          <Ionicons name="expand-outline" size={16} color="#fff" style={{opacity:0.8}} />
        </View>
        <View style={styles.activityRow}>
          <View style={styles.activityIconBox}>
            <Ionicons name="moon" size={22} color="#fff" style={styles.moon} />
            <Text style={styles.activityTime}>6:34</Text>
          </View>
          <Text style={styles.activityLabel}>SLEEP</Text>
          <View style={styles.activityTimes}>
            <Text style={styles.activityTimeRight}>5:31 AM</Text>
            <Text style={styles.activityTimeRight}>12:32 PM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addActivityBtn}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addActivityText}>ADD ACTIVITY</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.journalCard}>
        <View style={styles.journalLeft}>
          <Ionicons name="checkmark-circle-outline" size={28} color="#fff" style={{opacity: 0.6}} />
          <Text style={styles.journalText}>MY JOURNAL</Text>
        </View>
        <TouchableOpacity style={styles.journalBtn}>
          <Ionicons name="pencil-outline" size={18} color="#fff" />
          <Text style={styles.journalBtnText}>FILL OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#2A2F32',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3F4346',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  activityIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7BA1BB',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 12,
  },
  moon: {
    transform: [{ scaleX: -1 }],
  },
  activityTime: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
  },
  activityLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    letterSpacing: 1,
    marginLeft: 8,
  },
  activityTimes: {
    alignItems: 'flex-end',
  },
  activityTimeRight: {
    color: '#fff',
    fontSize: 10,
    opacity: 0.6,
    paddingRight: 8,
    borderRightWidth: 2,
    borderRightColor: '#7BA1BB',
  },
  addActivityBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E4244',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  addActivityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 8,
    letterSpacing: 1,
  },
  journalCard: {
    backgroundColor: '#2A2F32',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  journalLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  journalText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 8,
    letterSpacing: 1,
  },
  journalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#31363A',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  journalBtnText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 8,
    letterSpacing: 1,
  },
});
