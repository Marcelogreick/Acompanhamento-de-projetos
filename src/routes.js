import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Register from './pages/Register'
import Detail from './pages/Detail'
import Login from './pages/Login'

export default function Routes() {
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Register' component={Register}/>
                <AppStack.Screen name='Detail' component={Detail}/>
            </AppStack.Navigator>

        </NavigationContainer>
    )
}