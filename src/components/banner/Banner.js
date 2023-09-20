import React, {useState} from 'react';
import {StyleSheet, View, Image, FlatList, Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/colors/colors';

// Custom image swiper component.
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //console.log(currentIndex);

  const {width} = Dimensions.get('window');

  const IMAGES = [
    {
      id: 1,
      image: require('../../assets/images/banner1.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/images/banner2.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/images/banner3.jpg'),
    },
    {
      id: 4,
      image: require('../../assets/images/banner4.jpg'),
    },
    {
      id: 5,
      image: require('../../assets/images/banner5.jpg'),
    },
    {
      id: 6,
      image: require('../../assets/images/banner6.jpg'),
    },
  ];

  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={IMAGES}
        renderItem={({item}) => (
          <Image source={item.image} style={styles.images} />
        )}
        keyExtractor={item => item.id}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
      />
      <View style={styles.spacer} />
      <View style={styles.dotContainer}>
        {IMAGES.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dots,
                currentIndex == index
                  ? {
                      width: scale(12),
                      height: scale(12),
                      backgroundColor: COLOR.red,
                    }
                  : {
                      width: scale(7),
                      height: scale(7),
                      backgroundColor: COLOR.deepBlue,
                    },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    height: scale(210),
  },
  images: {
    height: scale(200),
    width: scale(325),
    marginLeft: moderateScale(5),
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    borderRadius: moderateScale(30),
    marginHorizontal: scale(3),
  },
  spacer: {
    height: verticalScale(16),
  },
});
