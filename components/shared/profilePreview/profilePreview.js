import React, { Component } from 'react';

import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';

class ProfilePreview extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://banner2.cleanpng.com/20180615/rtc/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cb002ed52.870627731529056432012.jpg'}}
                /> 
                <Text>@bashenov98</Text>
                </View>
                <View style={styles.dataWrapper}>
                    <Text>Имя:  Башенов Данияр Жамантаевич</Text>
                    <Text>Рейтинг: 5.0/5.0</Text>
                    <Text>Количество обменов: 12</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 70,
        width: '100%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        color: '#000'
    },
    imageContainer: {
        width: '30%',
        height: '90%'
    },
    dataWrapper: {
        width: '70%',
        height: '90%'
    }
});

export default ProfilePreview;