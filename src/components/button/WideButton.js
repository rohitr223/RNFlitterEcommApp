import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const WideButton = ({onPress, title, textColor, backgroundColor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.btn, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WideButton;

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    alignSelf: 'center',
    padding: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
});
