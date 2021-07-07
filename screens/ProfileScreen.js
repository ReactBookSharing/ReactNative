import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, AsyncStorage } from 'react-native';
import ProfileView from '../components/profileView/ProfileView';
import ProfileData from '../components/profileData/profileData';
import CustomButton from '../components/shared/button/Button';
class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{
          width: '100%',
          color: '#000'
        }}
      >
        {/* <View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}> */}
        <ProfileView />
        <ProfileData />
        <View style={style.buttonGroup}>
          <CustomButton
            title="Активные сессии"
            onPress={() => {}}
            disabled={false}
            styleProps={{
              backgroundColor: '#3396FF',
              borderColor: '#3396FF',
              height: 60
            }}
          />
          <CustomButton
            title="Моя библиотека"
            onPress={() => {}}
            disabled={false}
            styleProps={{
              backgroundColor: '#FF3633',
              borderColor: '#FF3633',
              height: 60
            }}
          />
          <CustomButton
            title="История обменов"
            onPress={() => {}}
            disabled={false}
            styleProps={{
              backgroundColor: '#9C33FF',
              borderColor: '#9C33FF',
              height: 60
            }}
          />
          <CustomButton
            title="Выйти"
            onPress={() => {
              AsyncStorage.clear();
              this.props.navigation.navigate('Login');
            }}
            disabled={false}
            styleProps={{
              backgroundColor: '#FF3633',
              borderColor: '#FF3633',
              height: 60
            }}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#000'
  },
  buttonGroup: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

export default ProfileScreen;
