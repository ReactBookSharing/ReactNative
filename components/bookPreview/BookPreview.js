import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

class BookPreview extends Component {
  render() {
    const { book, onPress } = this.props;
    return (
      <View style={style.containerWrapper} >
        <TouchableOpacity style={style.container} onPress={onPress}>
          <View style={style.imageContainer}>
            <Image source={book.img} style={style.image}/>
          </View>
          <View style={style.dataWrapper}>
            <View style={style.textRow}>
              <Text style={style.textBold}>Name:</Text>
              <Text> { book.name} </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Author:</Text>
              <Text> {book.authorName} </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Rating:</Text>
              <Text> { book.rating } / 5.0 </Text>
            </View>
            <View style={style.textRow}>
              <Text style={style.textBold}>Status:</Text>
              <Text> { book.status } </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BookPreview;

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
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: '#000'
  },
  imageContainer: {
    width: '30%',
    minWidth: 150,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
      width: 80,
      height: 120
  },
  dataWrapper: {
    width: '70%',
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
