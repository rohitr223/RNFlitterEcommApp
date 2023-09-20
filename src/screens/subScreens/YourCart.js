import React, {useState, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  RefreshControl,
  StatusBar,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../../redux/CartSlice';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale, scale} from 'react-native-size-matters';
import CartItem from '../../components/items/CartItem';

const YourCart = () => {
  // Dark/Light Theme selection
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  // App refresh
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // REDUX CART ITEMS
  const dispatch = useDispatch();

  const selectedCartItems = useSelector(state => state.cart.items);
  console.log(selectedCartItems);

  // Total price after adding all the cart items.
  const cartTotal = selectedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Total number of cart items in digits
  const totalCartItems = selectedCartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // console.log(totalCartItems)

  // REMOVE FROM CART
  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
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
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.header}>
          <Text
            style={[
              styles.heading,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            Cart
          </Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icons/cart.png')}
              style={styles.icon}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalCartItems}</Text>
            </View>
          </View>
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        {selectedCartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            image={item.image}
            onRemove={handleRemoveFromCart(item)}
          />
        ))}
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.cartTotal}>
          <View
            style={[
              styles.horizontalLine,
              isDarkTheme
                ? {backgroundColor: COLOR.white}
                : {backgroundColor: COLOR.purple},
            ]}
          />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.total}>
            <Text
              style={[
                styles.text,
                isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
              ]}>
              Your Cart Total
            </Text>
            <Text
              style={[
                styles.price,
                isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
              ]}>
              ₹ {cartTotal} /-
            </Text>
          </View>
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

export default YourCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: moderateScale(22),
    paddingLeft: moderateScale(8),
  },
  spacer: {
    height: scale(8),
    width: scale(8),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
  },
  iconContainer: {
    backgroundColor: COLOR.lightPurple,
    height: scale(45),
    width: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(30),
  },
  icon: {
    height: scale(30),
    width: scale(30),
    tintColor: COLOR.white,
  },
  badge: {
    backgroundColor: COLOR.deepBlue,
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(-20),
    left: moderateScale(-10),
  },
  badgeText: {
    color: COLOR.white,
    fontFamily: 'Poppins-SemiBold',
    padding: moderateScale(6),
  },
  emptyCartText: {
    color: COLOR.red,
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(19),
    textAlign: 'center',
    padding: moderateScale(15),
  },
  horizontalLine: {
    height: scale(5),
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
  },
  total: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
