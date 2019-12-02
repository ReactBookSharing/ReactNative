import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logoImg from '../../../assets/images/logo.png';
import backImg from '../../../assets/images/back.png';

const ScreenTop = props => {
  const { text } = props;
  return (
    <View style={style.container}>
      {/* <Image source={backImg} style={style.back} /> */}
      <Text style={style.text}>{text}</Text>
      {/* <Image source={logoImg} style={style.logo} /> */}
    </View>
  );
};

export default ScreenTop;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30
  },
  back: {
    width: 30
  },
  logo: {
    height: 40
  },
  text: {
    fontSize: 18,
    fontWeight: '700'
  }
});
