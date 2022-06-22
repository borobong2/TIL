import React, {useEffect, useState} from 'react';
import {
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  Button,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Loading = () => {
  const [size, changeSize] = useState('left');

  React.useEffect(() => {
    setTimeout(() => {
      console.log(size);

      toggleThirdBox();
    }, 1000);
  }, [size]);

  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    changeSize(size === 'min' ? 'max' : 'min');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, size === 'min' ? null : styles.moveRight]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: 'blue',
  },
  moveRight: {
    // alignSelf: 'flex-end',
    width: 300,
    height: 300,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
});

export default Loading;
