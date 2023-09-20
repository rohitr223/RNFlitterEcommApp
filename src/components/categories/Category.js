import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CommonButton from '../button/CommonButton';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';
import {Daily, Electronics, Fashion, Food, Groceries} from '../../screens';

const Category = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CommonButton
            title="Daily"
            backgroundColor={active === 0 ? COLOR.purple : COLOR.transparent}
            textColor={active === 0 ? COLOR.white : COLOR.mediumGrey}
            onPress={() => setActive(0)}
          />
          <CommonButton
            title="Electronics"
            marginHorizontal={moderateScale(3)}
            backgroundColor={active === 1 ? COLOR.purple : COLOR.transparent}
            textColor={active === 1 ? COLOR.white : COLOR.mediumGrey}
            onPress={() => setActive(1)}
          />
          <CommonButton
            title="Fashion"
            marginHorizontal={moderateScale(3)}
            backgroundColor={active === 2 ? COLOR.purple : COLOR.transparent}
            textColor={active === 2 ? COLOR.white : COLOR.mediumGrey}
            onPress={() => setActive(2)}
          />
          <CommonButton
            title="Groceries"
            marginHorizontal={moderateScale(3)}
            backgroundColor={active === 3 ? COLOR.purple : COLOR.transparent}
            textColor={active === 3 ? COLOR.white : COLOR.mediumGrey}
            onPress={() => setActive(3)}
          />
          <CommonButton
            title="Foods"
            marginHorizontal={moderateScale(3)}
            backgroundColor={active === 4 ? COLOR.purple : COLOR.transparent}
            textColor={active === 4 ? COLOR.white : COLOR.mediumGrey}
            onPress={() => setActive(4)}
          />
        </ScrollView>
      </View>
      <View style={styles.spacer} />
      <View>
        {active === 0 ? (
          <Daily />
        ) : active === 1 ? (
          <Electronics />
        ) : active === 2 ? (
          <Fashion />
        ) : active === 3 ? (
          <Groceries />
        ) : active === 4 ? (
          <Food />
        ) : null}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spacer: {
    height: scale(16),
  },
});
