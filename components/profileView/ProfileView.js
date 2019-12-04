import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import ProfilePreview from '../shared/profilePreview/profilePreview'
import CustomButton from '../shared/button/Button'


class ProfileView extends Component {
  render() {
    return (
      <View style={style.container}>
        <ProfilePreview />
        <View style={style.buttons}>
          <CustomButton
            title="Редактировать Профиль"
            disabled={false}
            margins={{
              marginHorizontal: 10
            }}
          />
          <CustomButton
            title="Управление платежными способами"
            disabled={false}
            margins={{
              marginHorizontal: 0
            }}
          />


        </View>
        <View style={style.fullProfileData}>
          <View style={style.variables}>
            <Text>Имя:</Text>
            <Text>Электронная почта:</Text>
            <Text>Адрес:</Text>
            <Text>Рейтинг:</Text>
            <Text>Номер телефона:</Text>
            <Text>Количество обменов:</Text>
            <Text>Предпочитаемый жанр:</Text>
          </View>
          <View style={style.variablesData}>
            <Text>Данияр</Text>
            <Text>bashenov98@gmail.com</Text>
            <Text>Кунаева 97, кв.51</Text>
            <Text>5.0/5.0</Text>
            <Text>+7 (771) 905 2133</Text>
            <Text>12</Text>
            <Text>Психология</Text>
          </View>
        </View>
        <View style={style.tabs}>
          <CustomButton
            title="Активные сессии"
            disabled={false}
            margins={{
              marginHorizontal: 0
            }}
          />
          <CustomButton
            title="Моя библиотека"
            disabled={false}
            margins={{
              marginHorizontal: 0
            }}
          />
          <CustomButton
            title="История обменов"
            disabled={false}
            margins={{
              marginHorizontal: 0
            }}
          />
        </View>
      </View>
    );
  }
}

export default ProfileView;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    color: '#000'
  },
  buttons: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  fullProfileData: {
    width: '100%',
    height: 400,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabs: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: '#000'
  },
  variables: {
    fontWeight: 'bold'
  },
  variablesData: {

  }
});
