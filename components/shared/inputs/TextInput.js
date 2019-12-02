import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

class CustomTextInput extends React.Component {
  render() {
    const {
      onChange,
      onBlur,
      label,
      placeholder,
      value,
      required,
      secureTextEntry,
      error,
      touched
    } = this.props;
    return (
      <View style={style.container}>
        <View style={style.labelTextWrapper}>
          <Text>{label}</Text>
          {required ? <Text style={style.required}>*</Text> : null}
        </View>
        <TextInput
          style={error && touched ? {...style.textInput, ...style.errorColor} : { ...style.textInput }}
          onBlur={onBlur}
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        {error && touched ? <Text style={style.errorMessage}>{error}</Text> : null}
      </View>
    );
  }
}

export default CustomTextInput;

const style = StyleSheet.create({
  container: {
    width: '100%',
    margin: 0,
    marginTop: 20,
    marginBottom: 20
  },
  labelTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  labelText: {
    fontSize: 14,
    fontWeight: '300'
  },
  required: {
    color: '#FF3633'
  },
  errorMessage: {
    color: '#FF3633',
    fontSize: 12,
    fontWeight: '300'
  },
  errorColor: {
    borderColor: '#FF3633'
  },
  textInput: {
    width: '100%',
    minWidth: 200,
    height: 40,
    borderRadius: 5,
    borderColor: '#036ffc',
    borderWidth: 1,
    fontSize: 12,
    paddingLeft: 5
  },
});
