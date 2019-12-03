import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native';
import CustomTextInput from '../components/shared/inputs/TextInput';
import CustomButton from '../components/shared/button/Button';

import backImg from '../assets/images/backImg.png';
import logoImg from '../assets/images/logo.png';

class RegisterScreen extends Component {
  state = {
    values: {}
  };

  handleSubmit = values => {
    this.setState({
      values
    });
    console.log(values);
  };

  render() {
    return (
      <ImageBackground source={backImg} style={style.container}>
        <View style={style.loginWrapper}>
          <Image source={logoImg} />
          <Text style={style.welcomeText}>Добро пожаловать!</Text>
          <Text style={style.sigInText}>Регистрация</Text>
          <Formik
            initialValues={{
              username: '',
              email: '',
              name: '',
              surname: '',
              password1: '',
              password2: ''
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
              <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <CustomTextInput
                  onChange={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  label="Имя пользователя"
                  placeholder="Введите имя пользователя"
                  value={values.username}
                  error={errors.username}
                  touched={touched.username}
                  required
                />
                <CustomTextInput
                  onChange={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  label="Почта"
                  placeholder="Почта"
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  required
                />
                <CustomTextInput
                  onChange={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  label="Имя"
                  placeholder="Имя"
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  required
                />
                <CustomTextInput
                  onChange={handleChange('surname')}
                  onBlur={() => setFieldTouched('surname')}
                  label="Фамилия"
                  placeholder="Фамилия"
                  value={values.surname}
                  error={errors.surname}
                  touched={touched.surname}
                  required
                />
                <CustomTextInput
                  onChange={handleChange('password1')}
                  onBlur={() => {
                    setFieldTouched('password1');
                  }}
                  label="Придумайте пароль"
                  placeholder="Введите пароль"
                  value={values.password1}
                  error={errors.password1}
                  touched={touched.password1}
                  secureTextEntry
                />
                <CustomTextInput
                  onChange={handleChange('password2')}
                  onBlur={() => {
                    setFieldTouched('password2');
                  }}
                  label="Повторите пароль"
                  placeholder="Введите пароль"
                  value={values.password2}
                  error={errors.password2}
                  touched={touched.password2}
                  secureTextEntry
                />
                <View>
                  <CustomButton
                    title="Регистрация"
                    onPress={handleSubmit}
                    margins={{
                      marginHorizontal: 0
                    }}
                  />
                  <CustomButton
                    title="Войти"
                    onPress={() => { this.props.navigation.navigate('Login')}}
                    btnStyle="outFilled"
                    margins={{
                      marginHorizontal: 0
                    }}
                  />
                </View>
              </ScrollView>
            )}
          </Formik>
        </View>
      </ImageBackground>
    );
  }
}

export default RegisterScreen;

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
  email: Yup.string().required('Заполните поле'),
  name: Yup.string().required('Заполните поле'),
  surname: Yup.string().required('Заполните поле'),
  password1: Yup.string().required('Заполните поле'),
  password2: Yup.string().required('Заполните поле')
});
