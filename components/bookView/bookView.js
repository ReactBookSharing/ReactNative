import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, ScreenTop } from 'react-native';
import CustomButton from '../shared/button/Button'

class BookView extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.data}>
                    <View style={style.imageContainer}>
                        <Image
                            style={{ width: 100, height: 175 }}
                            source={{ uri: 'https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758' }}
                        />
                    </View>
                    <View style={style.bookData}>
                        <Text style={{fontWeight: 'bold'}}>Автор книги</Text>
                        <Text>Маргарет Митчелл</Text>
                        <Text style={{fontWeight: 'bold'}}>Владелец книги</Text>
                        <Text>@yerassyl</Text>
                        <Text style={{fontWeight: 'bold'}}>Цена</Text>
                        <Text>2500</Text>
                        <Text style={{fontWeight: 'bold'}}>Год издания</Text>
                        <Text>2007</Text>
                    </View>
                </View>
                <View style={style.bookDescription}>
                    <Text style={{fontWeight: 'bold'}}>Описание книги</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
                <View style={style.buttons}>
                    <CustomButton
                        title="Удалить"
                        disabled={false}
                        margins={{
                            marginHorizontal: 10
                        }}
                    />
                    <CustomButton
                        title="Редактировать"
                        disabled={false}
                        margins={{
                            marginHorizontal: 10
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default BookView;

const style = StyleSheet.create({
    container: {
        padding: 30

    },
    data: {
        flexDirection: 'row'
    },
    imageContainer: {

    },
    bookData: {
        padding: 20

    },
    bookDescription: {

    },
    buttons: {
        flexDirection: 'row' 
    }
});