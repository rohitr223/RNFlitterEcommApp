import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Image} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import Onboarding from 'react-native-onboarding-swiper';
import ClearBtn from '../../components/button/ClearBtn';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.white} barStyle="default" />
      <SafeAreaView style={styles.safeArea}>
        <Onboarding
          onSkip={() => navigation.navigate('SignUp')}
          onDone={() => navigation.navigate('SignUp')}
          bottomBarColor={COLOR.white}
          DoneButtonComponent={ClearBtn}
          pages={[
            {
              bottomBarColor: '#FFF',
              backgroundColor: COLOR.white,
              image: (
                <Image
                  source={require('../../assets/images/onboard1.png')}
                  style={styles.image}
                />
              ),
              title: 'Welcome To Fliter',
              subtitle:
                'Fliter app welcomes you all, lets start the journey together and enjoy the shopping. Dont forget to subscribe to our newsletter.',
            },
            {
              backgroundColor: COLOR.white,
              image: (
                <Image
                  source={require('../../assets/images/onboard2.png')}
                  style={styles.image}
                />
              ),
              title: 'Buy daily stuff!',
              subtitle:
                'Buy any stuff online, ranging from daily essentials, clothes, electronic items, fashion, makeup items, etc.',
            },
            {
              backgroundColor: COLOR.white,
              image: (
                <Image
                  source={require('../../assets/images/onboard3.png')}
                  style={styles.image}
                />
              ),
              title: '40% discount!',
              subtitle:
                'There is upto 40% discount on all the products on every month end. Dont forget to grasp this opportunity.',
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  safeArea: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    borderRadius: scale(30),
    marginHorizontal: scale(5),
  },
  spacer: {
    height: verticalScale(10),
  },
  image: {
    height: scale(300),
    width: '90%',
    alignSelf: 'center',
  },
});
