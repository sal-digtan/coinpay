import React from 'react'
import { Stack } from 'expo-router'

const AuthStack = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='account_setup' />
        </Stack>
    )
}

export default AuthStack