import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DetailScreen, HomeScreen, ProfileScreen, StreamScreen} from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constants';
import { Entypo } from 'react-native-vector-icons/Entypo';
import { COLORS } from '../themes/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.lightBack,
                },
                tabBarActiveBackgroundColor: COLORS.lightPurple,
            }}
        >
            <Tab.Screen name={ScreenName.home} component={HomeScreen}
                // options={{
                //     tabBarIcon: ({ color }) => (
                //         <Entypo name="home" color={color} size={26} />
                //     ),
                // }}
            />
            <Tab.Screen name={ScreenName.stream} component={StreamScreen}
            />
            <Tab.Screen name={ScreenName.profile} component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default RootNavigation