import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  RefreshControl,
  ScrollView,
  Button,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import auth from '@react-native-firebase/auth';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale, scale} from 'react-native-size-matters';
import Banner from '../../components/banner/Banner';
import Category from '../../components/categories/Category';

const Home = ({navigation}) => {
  // --- Color Scheme for light/dark mode ---
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  // --- App refresh ---
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // --- Checking internet connectivity ---
  const [isConnected, setIsConnected] = useState(false);
  //console.log(isConnected);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Connection type', state.type);
      // console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
    });
    unsubscribe();
  });

  // State Variabes
  const [name, setName] = useState('');

  const user = auth().currentUser;

  const checkCurrentUser = () => {
    // check if the user in already logged.
    if (user) {
      // name
      setName(user.displayName);
    } else {
      navigation.navigate('OnBoarding');
    }
  };

  useEffect(() => {
    checkCurrentUser();
  });

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkTheme
          ? {backgroundColor: COLOR.black}
          : {backgroundColor: COLOR.white},
      ]}>
      <StatusBar
        backgroundColor={COLOR.lightPurple}
        barStyle="light-content"
        color={COLOR.black}
      />
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.spacer} />
        {/* Check the internet connectivity */}
        {isConnected === true ? null : (
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Internet Not Connected!</Text>
            <Text style={styles.modalSubTitle}>
              Please check your internet connectivity and try again later...
            </Text>
          </View>
        )}
        {/* Main Container */}
        <View style={styles.mainContainer}>
          {/* Welocme the user */}
          <Text
            style={[
              styles.userName,
              isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
            ]}>
            Hello, {name}
          </Text>
          <Button
            title="Your Cart"
            onPress={() => navigation.navigate('YourCart')}
          />
          <View style={styles.spacer} />
          {/* Image Slider Banner */}
          <Banner />
          <View style={styles.spacer} />
          {/* Categories */}
          <Category />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: scale(16),
  },
  modal: {
    backgroundColor: COLOR.lightRed,
    height: scale(140),
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: moderateScale(30),
    borderRadius: moderateScale(15),
    padding: moderateScale(15),
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 50,
  },
  modalTitle: {
    fontSize: moderateScale(17),
    fontFamily: 'Poppins-SemiBoldItalic',
    color: COLOR.white,
  },
  modalSubTitle: {
    paddingTop: moderateScale(7),
    color: COLOR.white,
    fontSize: moderateScale(12),
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  userName: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBoldItalic',
  },
});
