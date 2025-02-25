import React from 'react'
import { Stack } from 'expo-router'

const AuthStack = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='registration' />
            <Stack.Screen name='confirm_phone' />
            <Stack.Screen name='create_account' />
            <Stack.Screen name='account_setup' />
            <Stack.Screen name='home_address' />
            <Stack.Screen name='personal_info' />
            <Stack.Screen name='country_residence' />
        </Stack>
    )
}

export default AuthStack