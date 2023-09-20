import React from 'react';
import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale, scale} from 'react-native-size-matters';
import CommonButton from '../button/CommonButton';

const CartItem = ({name, image, onRemove, onIncrement, onDecrement}) => {
  // Dark/Light Theme selection
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.cartItem,
        isDarkTheme
          ? {backgroundColor: COLOR.darkGrey, shadowColor: COLOR.blue}
          : {backgroundColor: COLOR.white, shadowColor: COLOR.black},
      ]}>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.name,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            {name}
          </Text>
          <View style={styles.quantity}>
            <CommonButton
              title="+"
              textColor={COLOR.white}
              backgroundColor={COLOR.green}
              onPress={onIncrement}
            />
            <Text style={styles.counter}>1</Text>
            <CommonButton
              title="-"
              textColor={COLOR.white}
              backgroundColor={COLOR.red}
              onPress={onDecrement}
            />
          </View>
        </View>
      </View>
      <CommonButton
        title="Remove"
        textColor={COLOR.white}
        backgroundColor={COLOR.lightRed}
        onPress={onRemove}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    width: '95%',
    alignSelf: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    height: scale(80),
    width: scale(80),
    backgroundColor: COLOR.red,
    marginRight: moderateScale(5),
  },
  subContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalSpacer: {
    width: scale(8),
  },
  counter: {
    fontSize: moderateScale(18),
    padding: moderateScale(5),
  },
});
