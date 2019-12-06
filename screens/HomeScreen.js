import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BookPreview from '../components/bookPreview/BookPreview';
import bookImg from '../assets/images/book.jpg';
class HomeScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Books for You</Text>
        <FlatList
          data={books}
          renderItem={({item}) => <BookPreview book={item} onPress={() => { 
            this.props.navigation.navigate('Detail', { book: item, title: item.name});
          }}/>}
          keyExtractor={item => item.id}
          style={style.listStyle}
        />
      </View>
    );
  }
}

export default HomeScreen;

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
  },
  text: {
    marginVertical: 10,
    fontWeight: "700",
    fontSize: 24,
    marginLeft: 10
  }
});

const books = [
  {
    id: '1',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '2',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '3',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '4',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '5',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '6',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '7',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  },
  {
    id: '8',
    img: bookImg,
    name: "War and Peace",
    authorName: "Lev Tolstoy",
    rating: "4.0",
    status: "available"
  }
]
