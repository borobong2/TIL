import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import Logo from '../assets/logo/Loading.svg';

const Loading = ({navigation}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const changeScale = () => {
    Animated.timing(scale, {
      toValue: 1.05,
      duration: 225,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 225,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    setInterval(() => {
      changeScale();
    }, 450);
  }, []);

  return (
    <View style={styles.wrap}>
      <View style={styles.logo}>
        <Animated.View style={[{transform: [{scale}]}]}>
          <WithLocalSvg
            fill={'#000000'}
            asset={Logo}
            style={styles.changeSize}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeSize: {
    width: 105,
    height: 105,
  },
});

export default Loading;
