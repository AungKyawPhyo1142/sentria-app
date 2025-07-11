import SmallLogo from '@assets/images/sentria-small.svg'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import Button from '../components/Button'

const backgroundImage = require('@assets/images/welcome-bg.jpg')

export default function welcome() {

    const router = useRouter()

    const handleLoginPress = () => {
        // Redirect to login page
        router.push('/login')
    }

    return (
        <ImageBackground source={backgroundImage} className='flex-1 items-center justify-end pb-32 relative'>
            {/* Overlay */}
            <View className='absolute inset-0 bg-black opacity-40' />
            {/* Content */}
            <View className='flex flex-col items-end justify-center gap-y-28 pb-10  w-full px-16'>
                <View className='flex items-center justify-center gap-4  w-full'>
                    <SmallLogo width={150} height={150} />
                    <View className='flex flex-col items-center justify-center gap-2'>
                        <Text className='text-white uppercase font-bold text-4xl font-poppins'>welcome</Text>
                        <Text className='text-white font-normal text-xl font-poppins'>Hope isn’t lost — it’s shared.</Text>
                        <Text className='text-white font-normal text-xl font-poppins'>Sentria helps you find it again.</Text>
                    </View>
                </View>
                <View className='flex flex-col items-center justify-center gap-5  w-full'>
                    <Button className='!w-full' primary onPress={handleLoginPress}>
                        <Text className='text-white font-normal text-xl font-poppins'>Login With Email</Text>
                    </Button>
                    <View className='flex flex-row items-center justify-center gap-2 w-full'>
                        <Text className='text-white font-normal text-lg font-poppins'>Don't have an account?</Text>
                        <Link href='/register' asChild>
                            <Text className='text-white font-normal text-lg font-poppins underline'>Register</Text>
                        </Link>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}