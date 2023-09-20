import React, {useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';
import WideButton from '../../components/button/WideButton';

const Login = ({navigation}) => {
  // state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        //console.log(res.user);
        navigation.navigate('Home');
      })
      .catch(err => {
        Alert.alert('Error Occoured', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.deepBlue} barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          style={styles.keyBoardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <Image
              source={require('../../assets/icons/ecomm.png')}
              style={styles.topIcon}
            />
            <View style={styles.spacer} />
            <Text style={styles.title}>Welcome to Fliter!</Text>
            <Text style={styles.subTitle}>Create a Free Account.</Text>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/email.png')}
                style={styles.icon}
              />
              <TextInput
                autoCapitalize="none"
                placeholder="Enter Your Email"
                placeholderTextColor={COLOR.darkGrey}
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.spacer} />
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/lock.png')}
                style={styles.icon}
              />
              <TextInput
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Create a Password (8 characters)"
                maxLength={8}
                placeholderTextColor={COLOR.darkGrey}
                style={styles.textInput}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <View style={styles.spacer} />
            </View>
            <View style={styles.spacer} />
            <WideButton
              title="Login"
              backgroundColor={!email || !password ? COLOR.black : COLOR.green}
              textColor={COLOR.white}
              disabled={!email || !password}
              onPress={loginUser}
            />
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.linkText}>New user? Tap to SignUp.</Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <View style={styles.spacer} />
      <View style={styles.spacer} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.deepBlue,
  },
  safeAreaView: {flex: 1},
  keyBoardAvoidingView: {flex: 1},
  topIcon: {
    alignSelf: 'center',
    tintColor: COLOR.white,
    height: scale(140),
    width: scale(140),
  },
  title: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: scale(28),
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  subTitle: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: scale(16),
    fontFamily: 'Poppins-SemiBold',
  },
  spacer: {
    height: verticalScale(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.blue,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(9),
  },
  icon: {
    height: scale(30),
    width: scale(30),
    tintColor: COLOR.white,
    margin: moderateScale(10),
  },
  textInput: {
    backgroundColor: COLOR.white,
    flex: 1,
    padding: moderateScale(15),
    alignSelf: 'center',
    color: COLOR.black,
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
  link: {
    alignSelf: 'center',
  },
  linkText: {
    color: COLOR.white,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold',
  },
});
