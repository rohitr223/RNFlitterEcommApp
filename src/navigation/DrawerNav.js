import React from 'react';
import {Image, StyleSheet, useColorScheme} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Favourite, Profile, History} from '../screens';
import {COLOR} from '../assets/colors/colors';
import DrawerContent from './DrawerContent';
import {scale} from 'react-native-size-matters';
import BottomTabNav from './BottomTabNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  // Color Scheme for light/dark mode
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: isDarkTheme ? COLOR.black : COLOR.white,
        },
        headerStyle: {
          backgroundColor: COLOR.lightPurple,
        },
        headerTintColor: COLOR.white,
        drawerActiveBackgroundColor: COLOR.purple,
        drawerActiveTintColor: COLOR.white,
        drawerInactiveTintColor: isDarkTheme ? COLOR.white : COLOR.black,
      }}>
      <Drawer.Screen
        name="Fliter"
        component={BottomTabNav}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={[
                styles.icon,
                {tintColor: focused ? COLOR.white : COLOR.mediumGrey},
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/heart.png')}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLOR.white : COLOR.mediumGrey},
                ]}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/arrow.png')}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLOR.white : COLOR.mediumGrey},
                ]}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/icons/user.png')}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLOR.white : COLOR.mediumGrey},
                ]}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  icon: {
    height: scale(25),
    width: scale(25),
  },
});
