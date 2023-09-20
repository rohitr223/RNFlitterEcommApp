import React from 'react';
import {StyleSheet, Image, View, Text, useColorScheme} from 'react-native';
import starIcon from '../../assets/icons/star.png';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';

const StarRating = ({rating}) => {
  // Converting rating data into math function to round up the number
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  // light / dark mode color scheme.
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  return (
    <View>
      {/* Check if the rating is available or not */}
      {rating == null ? (
        <Text
          style={[
            styles.errorText,
            isDarkTheme ? {color: COLOR.lightOrange} : {color: COLOR.red},
          ]}>
          Rating's Not Available!
        </Text>
      ) : (
        <View style={styles.starRatingContainer}>
          {/* Render filled stars */}
          {[...Array(filledStars)].map((_, index) => (
            <Image source={starIcon} style={styles.filledStars} key={index} />
          ))}
          {/* Render remaining outlined stars */}
          {[...Array(remainingStars)].map((_, index) => (
            <Image
              source={starIcon}
              style={styles.emptyStars}
              key={filledStars + index}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
  },
  filledStars: {
    tintColor: COLOR.lightYellow,
    height: scale(15),
    width: scale(15),
  },
  emptyStars: {
    tintColor: COLOR.mediumGrey,
    height: scale(15),
    width: scale(15),
  },
  errorText: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
});
