import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import Logo from '../assets/logo/Loading.svg';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Loading = (props, {navigation}) => {
  const {isLoading} = props;
  const [size, setSize] = useState('min');

  React.useEffect(() => {
    setTimeout(() => {
      // changeSizeToggle();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  useEffect(() => {
    return () => {
      changeSizeToggle(false);
      setSize(false);
    }; // cleanup function을 이용
  }, [isLoading]);

  const changeSizeToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (isLoading) {
      setSize(size === 'min' ? 'max' : 'min');
    } else {
      return;
    }
  };

  const scale = useRef(new Animated.Value(0)).current;
  const changeScale = () => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };
  React.useEffect(() => {
    setInterval(() => {
      changeScale();
    }, 1000);
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
