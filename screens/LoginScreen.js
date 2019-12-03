import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AsyncStorage, View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import CustomTextInput from '../components/shared/inputs/TextInput';
import CustomButton from '../components/shared/button/Button';

import backImg from '../assets/images/backImg.png';
import logoImg from '../assets/images/logo.png';

class LoginScreen extends Component {
  state = {
    values: {}
  };

  handleSubmit = values => {
    this.setState({
      values
    });
    console.log(values);
    AsyncStorage.setItem('userToken', 'asdfasdf');
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <ImageBackground source={backImg} style={style.container}>
        <View style={style.loginWrapper}>
          <Image source={logoImg} />
          <Text style={style.welcomeText}>Добро пожаловать!</Text>
          <Text style={style.sigInText}>Войти в систему</Text>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={values => {
              this.handleSubmit(values);
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldTouched
            }) => (
              <View style={{ width: '100%' }}>
                <CustomTextInput
                  onChange={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  label="Имя пользователя"
                  placeholder="Введите имя пользователя"
                  value={values.username}
                  error={errors.username}
                  touched={touched.username}
                />
                <CustomTextInput
                  onChange={handleChange('password')}
                  onBlur={() => {
                    setFieldTouched('password');
                  }}
                  label="Пароль"
                  placeholder="Введите пароль"
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  secureTextEntry
                />
                <View>
                  <CustomButton
                    title="Войти"
                    onPress={handleSubmit}
                    disabled={false}
                    margins={{
                      marginHorizontal: 0
                    }}
                  />
                  <CustomButton
                    title="Регистрация"
                    onPress={() => { this.props.navigation.navigate('Register')}}
                    disabled={false}
                    btnStyle="outFilled"
                    margins={{
                      marginHorizontal: 0
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  loginWrapper: {
    padding: 30,
    width: '90%',
    height: '80%',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  welcomeText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  },
  sigInText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Заполните поле'),
  password: Yup.string().required('Заполните поле')
});
