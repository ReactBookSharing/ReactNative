import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import chelikImg from '../../assets/images/chelik.png';

class ProfileData extends Component {
  render() {
    return (
      <View style={style.containerWrapper}>
        <View style={style.container}>
          <View style={style.dataWrapper}>
            <View style={style.textRow}>
              <Text style={style.textBold}>Name:</Text>
              <Text> Assyl Suleiman </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Rating:</Text>
              <Text> 5.0 / 5.0 </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Exchange amount:</Text>
              <Text> 24 </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Email:</Text>
              <Text> asuleyman2403@gmail.com </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Phone number:</Text>
              <Text> + 7 (747) 589 66 99 </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileData;

const style = StyleSheet.create({
  containerWrapper: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 10
  },
  container: {
    borderColor: '#3F33FF',
    borderRadius: 3,
    borderWidth: 1,
    width: '100%',
    height: 250,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: '#000'
  },
  dataWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textBold: {
    fontWeight: '700'
  }
});
