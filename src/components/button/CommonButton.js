import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const CommonButton = ({
  title,
  backgroundColor,
  height,
  width,
  onPress,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          height: height,
          width: width,
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-SemiBold',
  },
});
