import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenTop from '../components/shared/screenTop/ScreenTop';
import ProfileView from '../components/profileView/ProfileView';


class ProfileScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScreenTop text="Профиль"/>
                <ProfileView />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000',
    },
});

export default ProfileScreen;

