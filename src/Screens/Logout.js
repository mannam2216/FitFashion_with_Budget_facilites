import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Clear user data on mount
    const clearData = async () => {
      await AsyncStorage.removeItem('EMAIL');
      await AsyncStorage.removeItem('PASSWORD');
    };

    clearData();
  }, []);

  const handleLogout = () => {
    // Navigate to login screen
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>You have been logged out</Text>
      <Button title="Go to Login" onPress={handleLogout} />
    </View>
  );
};

export default Logout;
