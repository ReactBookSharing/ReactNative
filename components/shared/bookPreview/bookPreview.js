import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

class BookPreview extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.imageContainer}>
                    <Image
                        style={{ width: 50, height: 100 }}
                        source={{ uri: 'https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758' }}
                    />
                </View>
                <View style={style.data}>
                    <View style={style.variables}>
                        <Text>Название:</Text>
                        <Text>Автор:</Text>
                        <Text>Статус:</Text>
                    </View>
                    <View style={style.dataVariables}>
                        <Text>Капитал</Text>
                        <Text>Карл Маркс</Text>
                        <Text>Обмен</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageContainer: {

    },
    data: {

    },
    variables: {

    },
    dataVariables: {

    }
});