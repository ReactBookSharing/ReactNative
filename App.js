import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import DetailScreen from './screens/DetailScreen';

const AppBookNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: 'Home'
  }
);

const AppBottomNavigator = createBottomTabNavigator(
  {
    Home: AppBookNavigator,
    Notification: NotificationScreen,
    Profile: ProfileScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let size = 25;
        let color = focused ? '#3396FF' : '#595959';
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'Add') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notification') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact`;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#3396FF',
      inactiveTintColor: '#595959'
    }
  }
);

const AppStackNavigator = createStackNavigator({
  AppBottomNavigator
});

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStackNavigator
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default App;
