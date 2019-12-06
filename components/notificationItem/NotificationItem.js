import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NotificationItem extends Component {
  render() {
    const { text, buttonText1, buttonText2 } = this.props;
    return (
      <View style={style.container}>
        <Text style={style.mainText}>{text}</Text>
        <View style={style.linksWrapper}>
          <Text style={style.linkItem}>{buttonText1}</Text>
          <Text style={style.linkItem}>{buttonText2}</Text>
        </View>
      </View>
    );
  }
}

export default NotificationItem;

const style = StyleSheet.create({
  container: {
    minHeight: 100,
    margin: 10,
    borderColor: '#3396FF',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  mainText: {
      paddingVertical: 10,
      fontWeight: "400",
  },
  linksWrapper: {
      width: '100%',
      flexDirection: "row",
      justifyContent: "flex-end"
  },
  linkItem: {
      textDecorationLine: "underline",
      marginHorizontal: 10
  }
});
