import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '../assets/colors/colors';
import auth from '@react-native-firebase/auth';

const DrawerContent = props => {
  // Color Scheme for light/dark mode
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const user = auth().currentUser;

  // Get the user information
  const getUserInfo = () => {
    if (user) {
      // name
      setName(user.displayName);
      // email
      setEmail(user.email);
    }
  };

  useEffect(() => {
    getUserInfo();
  });

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <Image
          source={require('../assets/icons/user1.png')}
          style={[
            styles.userIcon,
            {tintColor: isDarkTheme ? COLOR.white : COLOR.purple},
          ]}
        />
        <View style={styles.spacer} />
        <Text
          style={[
            styles.name,
            {color: isDarkTheme ? COLOR.white : COLOR.purple},
          ]}>
          {name}
        </Text>
        <Text
          style={[
            styles.email,
            {color: isDarkTheme ? COLOR.white : COLOR.purple},
          ]}>
          {email}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    width: '100%',
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: verticalScale(8),
  },
  userIcon: {
    height: scale(100),
    width: scale(100),
  },
  name: {
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-SemiBold',
  },
  email: {
    fontSize: moderateScale(13),
    fontFamily: 'Poppins-MediumItalic',
  },
});
