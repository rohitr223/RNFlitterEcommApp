import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import StarRating from '../../components/rating/StarRating';
import {COLOR} from '../../assets/colors/colors';

const Card = ({
  onPress,
  title,
  price,
  backgroundColor,
  rating,
  image,
  reviews,
}) => {
  // light/dark color theme
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.card,
        isDarkTheme
          ? {
              backgroundColor: COLOR.darkBrown,
            }
          : {backgroundColor: backgroundColor},
      ]}
      onPress={onPress}>
      {image == null ? (
        <Image
          source={require('../../assets/images/noImage.png')}
          style={styles.image}
        />
      ) : (
        <Image source={{uri: image}} style={styles.image} />
      )}
      <View style={styles.cardInfo}>
        <View style={styles.reviewContainer}>
          <StarRating rating={rating} />
          <Text
            style={[
              styles.review,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            ({reviews})
          </Text>
        </View>
        <Text
          style={[
            styles.title,
            isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.price,
            isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
          ]}>
          {price}
        </Text>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Details</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(3),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: COLOR.white,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: scale(130),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  cardInfo: {
    paddingLeft: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    fontSize: moderateScale(12),
  },
  title: {
    paddingVertical: moderateScale(3),
    fontSize: moderateScale(15),
    fontFamily: 'Poppins-SemiBold',
  },
  price: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  btn: {
    backgroundColor: COLOR.purple,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(6),
    marginVertical: moderateScale(12),
    borderRadius: moderateScale(8),
  },
  btnText: {
    color: COLOR.white,
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-SemiBoldItalic',
  },
});
