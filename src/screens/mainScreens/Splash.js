import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerNav');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.purple} barStyle="light-content" />
      <Image
        source={require('../../assets/icons/ecomm.png')}
        style={styles.icon}
      />
      <View style={styles.spacer} />
      <Text style={styles.title}>Fliter</Text>
      <Text style={styles.subTitle}>Your personal shopping app.</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.purple,
  },
  icon: {
    tintColor: COLOR.white,
    height: scale(140),
    width: scale(140),
  },
  spacer: {
    height: scale(16),
  },
  title: {
    fontSize: scale(42),
    fontFamily: 'Poppins-SemiBoldItalic',
    color: COLOR.white,
  },
  subTitle: {
    fontSize: scale(16),
    color: COLOR.white,
    fontFamily: 'Poppins-SemiBoldItalic',
  },
});
