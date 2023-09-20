import React from 'react';
import {Image, StyleSheet, View, Platform, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Track, YourCart} from '../screens';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '../assets/colors/colors';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  // Color Scheme for light/dark mode
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.white,
        tabBarInactiveTintColor: COLOR.purple,
        tabBarStyle: {
          height: verticalScale(75),
          backgroundColor: isDarkTheme ? COLOR.black : COLOR.white,
          shadowColor: COLOR.black,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabBarButton,
                focused
                  ? {transform: [{scale: 1.3}], backgroundColor: 'purple'}
                  : {backgroundColor: '#EEE'},
              ]}>
              <Image
                source={require('../assets/icons/home.png')}
                style={[styles.icon, {tintColor: color}]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="YourCart"
        component={YourCart}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabBarButton,
                focused
                  ? {transform: [{scale: 1.3}], backgroundColor: 'purple'}
                  : {backgroundColor: '#EEE'},
              ]}>
              <Image
                source={require('../assets/icons/cart.png')}
                style={[styles.icon, {tintColor: color}]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabBarButton,
                focused
                  ? {transform: [{scale: 1.3}], backgroundColor: 'purple'}
                  : {backgroundColor: '#EEE'},
              ]}>
              <Image
                source={require('../assets/icons/map.png')}
                style={[styles.icon, {tintColor: color}]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  tabBarButton: {
    marginTop: Platform.OS === 'ios' ? moderateScale(10) : 0,
    padding: moderateScale(10),
    borderRadius: moderateScale(40),
  },
  icon: {
    height: scale(20),
    width: scale(20),
  },
});
