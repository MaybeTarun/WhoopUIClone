import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

export default function progressBar({ value, label, color, max = 100, isPercent = true, onLabelPress }) {
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={[styles.container, { width: size }]}> 
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}> 
          <Circle
            stroke="#444D51"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke={color}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text style={styles.value}>
        {isPercent ? `${value}%` : value}
      </Text>
      <View style={styles.labelContainer}>
        <TouchableOpacity onPress={onLabelPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.label}>{label}</Text>
          <Ionicons name="chevron-forward" size={14} color="#fff" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    marginTop: -8,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    position: 'absolute',
    top: 36,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 2,
    opacity: 0.6,
  },
});
