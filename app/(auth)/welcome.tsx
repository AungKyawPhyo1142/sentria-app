import React from 'react'
import { Text, View } from 'react-native'

export default function welcome() {
    return (
        <View className='flex-1 items-center justify-center bg-green-500'>
            <Text className='text-red-900 text-3xl'>welcome</Text>
        </View>
    )
}