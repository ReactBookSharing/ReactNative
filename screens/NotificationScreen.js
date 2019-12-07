import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NotificationItem from '../components/notificationItem/NotificationItem';
class NotificationScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <FlatList
          data={notifications}
          renderItem={({ item }) => <NotificationItem {...item} />}
          keyExtractor={item => item.id}
          style={style.listStyle}
        />
      </View>
    );
  }
}

export default NotificationScreen;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#000'
  },
  listStyle: {
    width: '100%'
  }
});

const notifications = [
  {
    id: '1',
    text: 'User @name wants to exchange book with you',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '2',
    text: 'User @name wants to buy one book from you',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '3',
    text: 'User @name wants to subscribe you',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '4',
    text: 'User @name commneted',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '5',
    text: 'User @name published book for exchange',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '6',
    text: 'User @name rate you',
    buttonText1: 'More',
    buttonText2: 'Decline'
  },
  {
    id: '7',
    text: 'Please rate @name',
    buttonText1: 'More',
    buttonText2: 'Decline'
  }
];
