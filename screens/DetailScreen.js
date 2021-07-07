import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/shared/button/Button';
import BookPreview from '../components/bookPreview/BookPreview';
import BookInfo from '../components/bookInfo/BookInfo';
class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });
  render() {
    const book = this.props.navigation.getParam('book');
    book.cost = 2000;
    return (
      <View style={style.container}>
        <BookPreview book={book} onPress={() => {}} />
        <BookInfo book={book} />
        <View style={style.buttonGroup}>
          <CustomButton
            title="Buy now"
            onPress={() => {}}
            disabled={false}
            styleProps={{
              backgroundColor: '#3396FF',
              borderColor: '#3396FF',
              height: 60
            }}
          />
          <CustomButton
            title="Exchange"
            onPress={() => {}}
            disabled={false}
            styleProps={{
              backgroundColor: '#FF3633',
              borderColor: '#FF3633',
              height: 60
            }}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#000'
  },
  buttonGroup: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

export default DetailScreen;
