import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookInfo extends Component {
  render() {
    const { book } = this.props;
    return (
      <View style={style.containerWrapper}>
        <View style={style.container}>
          <View style={style.dataWrapper}>
            <View style={style.textRow}>
              <Text style={style.textBold}>Name:</Text>
              <Text> {book.name} </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Author:</Text>
              <Text> {book.authorName} </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Rating:</Text>
              <Text> {book.rating} / 5.0 </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Exchange amount:</Text>
              <Text> 24 </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Owner:</Text>
              <Text> @asuleiman</Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Cost:</Text>
              <Text> {book.cost} KZT</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BookInfo;

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
