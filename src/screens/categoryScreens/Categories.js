import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  RefreshControl,
} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale, scale} from 'react-native-size-matters';
import CommonHeader from '../../components/header/CommonHeader';
import StarRating from '../../components/rating/StarRating';
import WideButton from '../../components/button/WideButton';

const Categories = ({route, navigation}) => {
  const {name, reviews, image, rating, price, info} = route.params;

  // light / dark mode color scheme.
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  // App refresh
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // Navigate to Basket
  const navigateToBasket = () => {
    navigation.navigate('Cart', {name: name, image: image, price: price});
  };

  return (
    <View
      style={[
        styles.container,
        isDarkTheme
          ? {backgroundColor: COLOR.black}
          : {backgroundColor: COLOR.white},
      ]}>
      <StatusBar backgroundColor={COLOR.lightPurple} barStyle="light-content" />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <SafeAreaView style={styles.header}>
          <CommonHeader onPress={() => navigation.goBack()} />
        </SafeAreaView>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.itemInfo}>
          <Text
            style={[
              styles.name,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            {name}
          </Text>
          <View style={styles.spacer} />
          <Text
            style={[
              styles.info,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            {info}
          </Text>
          <View style={styles.spacer} />
          {rating === '' ? null : (
            <View style={styles.ratingContainer}>
              <Text
                style={[
                  styles.rating,
                  isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
                ]}>
                {rating}
              </Text>
              <View style={styles.spacer} />
              <StarRating rating={rating} />
              <View style={styles.spacer} />
              <Text
                style={[
                  styles.review,
                  isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
                ]}>
                ({reviews})
              </Text>
            </View>
          )}
          <View style={styles.spacer} />
          <Text
            style={[
              styles.price,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.darkGreen},
            ]}>
            {price}
          </Text>
        </View>
        <WideButton
          title="Add To Cart"
          textColor={COLOR.white}
          backgroundColor={COLOR.lightPurple}
          onPress={navigateToBasket}
        />
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: scale(280),
    width: '100%',
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    zIndex: 10,
  },
  itemInfo: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(22),
    fontFamily: 'Poppins-SemiBold',
  },
  info: {
    fontSize: moderateScale(18),
  },
  price: {
    fontSize: moderateScale(28),
    fontFamily: 'Poppins-SemiBold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-SemiBold',
  },
  errorText: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  review: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  spacer: {
    height: scale(8),
    width: scale(4),
  },
});
