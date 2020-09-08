import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/loginscreen';
import BoardListScreen from '../screen/boardlistscreen';

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {headerShown:false}
            }>
                <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
                <Stack.Screen name='BoardList' component={BoardListScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator