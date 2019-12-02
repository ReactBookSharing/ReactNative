import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ProfileView extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.imageContainer}></View>
        <View style={style.dataWrapper}></View>
      </View>
    );
  }
}

export default ProfileView;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    color: '#000'
  },
  imageContainer: {
    width: '30%',
    height: '90%'
  },
  dataWrapper: {
    width: '70%',
    height: '90%'
  }
});
