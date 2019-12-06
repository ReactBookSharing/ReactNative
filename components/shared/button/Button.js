import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class CustomButton extends Component {
  render() {
    let {
      title,
      disabled,
      onPress,
      btnStyle,
      margins,
      styleProps
    } = this.props;
    margins = margins ? margins : {};
    styleProps = styleProps ? styleProps : {};
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={
          btnStyle === 'outFilled'
            ? {...{ ...style.button, ...style.buttonOutFilled, ...margins, }, ...styleProps}
            : { ...{...style.button, ...style.buttonFilled, ...margins}, ...styleProps }
        }
      >
        <Text
          style={
            btnStyle === 'outFilled'
              ? { ...style.text, ...style.textOutFilled }
              : { ...style.text, ...style.textFilled }
          }
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;

const style = StyleSheet.create({
  button: {
    minWidth: 100,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 10,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFilled: {
    backgroundColor: '#036ffc',
    borderColor: '#036ffc'
  },
  buttonOutFilled: {
    backgroundColor: '#FFF',
    color: '#036FFC',
    borderColor: '#036FFC'
  },
  text: {
    fontSize: 14,
    fontWeight: '700'
  },
  textFilled: {
    color: '#FFF'
  },
  textOutFilled: {
    color: '#036FFC'
  }
});
