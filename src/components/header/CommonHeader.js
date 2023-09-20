import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale, scale} from 'react-native-size-matters';

const CommonHeader = ({onPress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image
          source={require('../../assets/icons/backArrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
  },
  btn: {
    backgroundColor: COLOR.deepPurple,
    padding: moderateScale(10),
    borderRadius: moderateScale(60),
  },
  icon: {
    tintColor: COLOR.white,
    height: scale(30),
    width: scale(30),
  },
});
