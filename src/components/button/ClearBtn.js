import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';

const ClearBtn = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.btn}>
      <Text style={styles.btnText}>Done</Text>
    </TouchableOpacity>
  );
};

export default ClearBtn;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
  },
  btnText: {
    fontSize: moderateScale(15),
    fontFamily: 'Poppins-SemiBold',
    color: COLOR.darkGreen,
  },
});
