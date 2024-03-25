import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from "./HomePage";
import Profile from "./Profile";
import Events from "./Events";

const Tab = createBottomTabNavigator();

function setDefaultOptions(title: string) {

    return { 
        headerStyle: {backgroundColor: 'black'}, 
        title: title, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 30
        }
    }
}

function NavBar(): React.JSX.Element {

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName: string = '';
  
              if (route.name === 'Home') {
                iconName = 'home-outline'
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              } else if (route.name === 'Events') {
                iconName = 'trophy-outline'
              }
              console.log(color)
              return <Ionicons name={iconName} size={25} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: { backgroundColor: 'black' },
            contentStyle:{
                backgroundColor:'#FFFFFF'
              }
          })}>
            <Tab.Screen name="Home" component={HomePage} options={
                setDefaultOptions('[ASS]')
                }/>
            <Tab.Screen name="Events" component={Events} options={
                setDefaultOptions('Events')
                }/>
            <Tab.Screen name="Profile" component={Profile} options={
                setDefaultOptions('Profile')
                }/>
        </Tab.Navigator>
    )
}

export default NavBar;