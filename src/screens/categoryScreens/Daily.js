import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  Modal,
  Text,
  Pressable,
  Image,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/CartSlice';
import Card from '../../components/card/Card';
import {API_KEY} from '@env';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';
import StarRating from '../../components/rating/StarRating';
import WideButton from '../../components/button/WideButton';

const Daily = () => {
  const navigation = useNavigation();

  // Light/Dark Mode
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  // State Variable's
  const [data, setData] = useState('');
  const [details, setDetails] = useState('');
  //console.log(details);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch the api
  const api = `https://${API_KEY}/eCommerceAppApi/daily.json`;

  const getApi = () => {
    fetch(api)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        setData(json.daily);
      })
      .catch(err => {
        Alert.alert('No Internet', err.message);
      });
  };

  useEffect(() => {
    getApi();
  });

  // ADD TO CART FUNCTIONALITY
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={data}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <>
              <Card
                image={item.image}
                title={item.name}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                backgroundColor={item.color}
                onPress={() => {
                  setModalVisible(true);
                  setDetails(item);
                }}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                  setDetails(null);
                }}>
                <View
                  style={[
                    styles.modalView,
                    isDarkTheme
                      ? {backgroundColor: COLOR.black, shadowColor: COLOR.white}
                      : {
                          backgroundColor: COLOR.white,
                          shadowColor: COLOR.black,
                        },
                  ]}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    style={styles.modalButton}>
                    <Image
                      source={require('../../assets/icons/close.png')}
                      style={[
                        styles.modalIcon,
                        isDarkTheme
                          ? {tintColor: COLOR.white}
                          : {tintColor: COLOR.red},
                      ]}
                    />
                  </Pressable>
                  <ScrollView vertical showsVerticalScrollIndicator={false}>
                    {details.image == null ? (
                      <Image
                        source={require('../../assets/images/noImage.png')}
                        style={styles.image}
                      />
                    ) : (
                      <Image
                        source={{uri: details.image}}
                        style={styles.image}
                      />
                    )}
                    <Text
                      style={[
                        styles.title,
                        isDarkTheme
                          ? {color: COLOR.white}
                          : {color: COLOR.black},
                      ]}>
                      {details.name}
                    </Text>
                    <View style={styles.spacer} />
                    <View style={styles.ratingContainer}>
                      <StarRating rating={details.rating} />
                      <Text
                        style={[
                          styles.reviews,
                          isDarkTheme
                            ? {color: COLOR.white}
                            : {color: COLOR.black},
                        ]}>
                        ({details.reviews})
                      </Text>
                    </View>
                    <View style={styles.spacer} />
                    <Text
                      style={[
                        styles.info,
                        isDarkTheme
                          ? {color: COLOR.white}
                          : {color: COLOR.black},
                      ]}>
                      {details.description}
                    </Text>
                    <View style={styles.spacer} />
                    <Text
                      style={[
                        styles.price,
                        isDarkTheme
                          ? {color: COLOR.white}
                          : {color: COLOR.darkGreen},
                      ]}>
                      {details.price}/-
                    </Text>
                    <View style={styles.spacer} />
                    <View style={styles.spacer} />
                    <WideButton
                      title="Add To Cart"
                      textColor={COLOR.white}
                      backgroundColor={COLOR.lightYellow}
                      onPress={() => handleAddToCart(details)}
                    />
                    <View style={styles.spacer} />
                    <View style={styles.spacer} />
                    <View style={styles.spacer} />
                  </ScrollView>
                </View>
              </Modal>
            </>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '98%',
    height: scale(500),
    alignSelf: 'center',
    margin: moderateScale(20),
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    width: '30%',
  },
  modalIcon: {
    height: scale(35),
    width: scale(35),
    padding: moderateScale(10),
    right: 0,
  },
  image: {
    width: '100%',
    height: scale(250),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  spacer: {
    height: scale(8),
  },
  info: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  reviews: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: moderateScale(5),
  },
  price: {
    fontSize: moderateScale(28),
    fontFamily: 'Poppins-SemiBold',
  },
});
