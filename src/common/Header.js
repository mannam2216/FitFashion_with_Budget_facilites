import {SafeAreaView, View, Text, TouchableOpacity, Button, Linking, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonButton from '../common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header =  () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor:'#fff'
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
          color: '#000',
          marginLeft: 20,
        }}>
        FitFashion
      </Text>

      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
          marginBottom: 20,
          padding: 20,
          backgroundColor: "green",
          borderRadius: 8,
          color: "#fff"
        }}
        onPress={async () => {
          const n =  await AsyncStorage.getItem('NAME');
          console.log(n);
          const url = `https://budget-app-phi-amber.vercel.app/secure/Mriganka`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
        }}>
         <Text style={{color: "#fff"}}>{"b"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
