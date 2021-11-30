import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DetailScreen, HomeScreen, ProfileScreen, StreamScreen} from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../themes/styles';
import { TabRouter } from '@react-navigation/routers';
import { createNavigationContainerRef } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

const screenOptions = ({route}) => {
    return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: COLORS.lightBack,
            borderTopColor: COLORS.lightBack,
        },
        tabBarIcon: ({focused}) => {
            let iconName;
            const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
            if (route.name === ScreenName.homeTab) {
                iconName = 'home';
            } else if (route.name === ScreenName.stream) {
                iconName = 'game-controller';
            } else if (route.name === ScreenName.profile) {
                iconName = 'user';
            }
            return (
                <View style={[styles.tabItem, {backgroundColor}]}>
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
        <Stack.Screen name={ScreenName.home} component={RootTab}/>
        <Stack.Screen name={ScreenName.detail} component={DetailScreen}
        />
    </Stack.Navigator>
)

const RootTab = () => (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={ScreenName.homeTab} component={HomeScreen} />
      <Tab.Screen name={ScreenName.stream} component={StreamScreen} />
      <Tab.Screen name={ScreenName.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );

const RootNavigation = () => {
    return (
        <RootStack />
    )
}

export default RootNavigation

const styles = StyleSheet.create({
    tabItem: {
      width: '50%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
  });