import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  RefreshControl,
  Text,
  Button,
  Alert,
  useColorScheme,
} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import auth from '@react-native-firebase/auth';
import {moderateScale} from 'react-native-size-matters';

const Profile = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  // Light/Dark Mode
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  // Screen Refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'))
      .catch(err => Alert.alert('Sign Out Error', err.message));
  };

  return (
    <View
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
        <Text
          style={[
            styles.title,
            isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
          ]}>
          Profile
        </Text>
        <Button title="Logout" onPress={signOut} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  title: {
    fontSize: moderateScale(18),
    padding: moderateScale(15),
    fontFamily: 'Poppins-SemiBold',
  },
});
