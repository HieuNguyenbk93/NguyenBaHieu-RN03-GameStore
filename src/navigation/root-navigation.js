import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DetailScreen, HomeScreen, ProfileScreen, StreamScreen} from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../themes/styles';
import { TabRouter } from '@react-navigation/routers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => {
    return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: COLORS.lightBack,
            borderTopColor: COLORS.lightBack,
        },
        // tabBarActiveBackgroundColor: COLORS.lightPurple,
        tabBarIcon: ({focus}) => {
            let iconName;
            if (route.name === ScreenName.homeTab) {
                iconName = 'home';
            } else if (route.name === ScreenName.stream) {
                iconName = 'game-controller';
            } else if (route.name === ScreenName.profile) {
                iconName = 'user';
            }
            return (
                <View>
                    <Entypo name={iconName} color={COLORS.white} size={26} />
                </View>
            )
        }
    }
}

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        presentation: 'modal'
    }}>
        <Stack.Screen name={ScreenName.home} component={HomeScreen}/>
        <Stack.Screen name={ScreenName.detail} component={DetailScreen}
        />
    </Stack.Navigator>
)

const RootNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
        >
            <Tab.Screen name={ScreenName.homeTab} component={RootStack}
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