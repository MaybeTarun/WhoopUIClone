import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import TitleBar from './components/titlebar';
import Logo from './components/logo.js';
import ProgressBar from './components/progressBar';
import Card from './components/card';
import React, { useState, useEffect } from 'react';
import Popup from './components/popup';
import Day from './components/day';
import Dashboard from './components/dashboard';
import Nav from './components/nav';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [sleepValue, setSleepValue] = useState(0);
  const [recoveryValue, setRecoveryValue] = useState(0);
  const [strainValue, setStrainValue] = useState(0);

  useEffect(() => {
    setSleepValue(getRandomInt(50, 100));
    setRecoveryValue(getRandomInt(50, 100));
    setStrainValue(getRandomInt(1, 20));
  }, []);

  const handleLabelPress = (text: string) => {
    setPopupText(text);
    setPopupVisible(true);
  };

  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const dateString = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const displayDate = `${dayName}, ${dateString}`;

  return (
    <>
    <ScrollView style={styles.container}>

      <TitleBar displayDate={displayDate} />

      <View style={styles.logoContainer}>
        <Logo/>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 30 }}>
        <ProgressBar
          value={sleepValue}
          label="SLEEP"
          color="#8CB4D9"
          onLabelPress={() => handleLabelPress("Great work on sleeping.")}
       />
        <ProgressBar
          value={recoveryValue}
          label="RECOVERY"
          color="#1EFF65"
          onLabelPress={() => handleLabelPress("You have recovered well today. Keep up your routine.")}
       />
        <ProgressBar
          value={strainValue}
          label="STRAIN"
          color="#3CA6E5"
          max={20}
          isPercent={false}
          onLabelPress={() => handleLabelPress("Way to go!")}
       />
      </View>

      <Card/>

      <Day/>

      <Dashboard/>

      <Popup text={popupText} visible={popupVisible} onClose={() => setPopupVisible(false)}/>
      <StatusBar style="light"/>
    </ScrollView>

    <Nav/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212B30',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#fff',
  },
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
  logoContainer: {
    alignItems: 'center',
    width: '100%',
    height: 20,
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 16,
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
