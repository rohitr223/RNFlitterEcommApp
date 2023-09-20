import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  RefreshControl,
  Text,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import {COLOR} from '../../assets/colors/colors';
import {moderateScale} from 'react-native-size-matters';

const Favourite = () => {
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
        <Text
          style={[
            styles.title,
            isDarkTheme ? {color: COLOR.white} : {color: COLOR.black},
          ]}>
          Your Favourite's
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(18),
    padding: moderateScale(15),
    fontFamily: 'Poppins-SemiBold',
  },
});
