import FullLogo from '@assets/images/full-logo.svg'
import { Link } from 'expo-router'
import React from 'react'
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { useCountStore } from '../service/zustand/countStore'

const backgroundImage = require('@assets/images/login-bg.png')
export default function login() {
    const { count, increment, decrement } = useCountStore()
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ImageBackground
                source={backgroundImage}
                className="flex-1"
                resizeMode="cover"
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="w-full px-16">
                            <View className="mb-10 flex-col gap-y-5">
                                <FullLogo />
                                <Text className="font-poppins text-xl font-normal text-white">
                                    Please fill all the fields to login. {count}
                                </Text>
                            </View>
                            <View className="flex-col gap-y-5 mb-10">
                                <Button onPress={increment} primary>
                                    <Text className="text-white font-normal px-2 text-xl font-poppins">Increment</Text>
                                </Button>
                                <Button onPress={decrement} secondary>
                                    <Text className="text-white font-normal px-2 text-xl font-poppins">Decrement</Text>
                                </Button>
                            </View>
                            <View className="flex-col gap-y-10">
                                <Input placeholder="Email" />
                                <Input placeholder="Password" type="password" />
                                <Button className='!w-full' primary onPress={() => alert('Login pressed')}>
                                    <Text className='text-white font-normal  px-2 text-xl font-poppins'>Login</Text>
                                </Button>
                            </View>

                            <View className='h-[1px] rounded-full my-10 border-inactive/10 border  w-full' />
                            <View className='flex flex-row items-center justify-center gap-2 w-full'>
                                <Text className='text-white font-normal text-lg font-poppins'>Don't have an account?</Text>
                                <Link href='/register' asChild>
                                    <Text className='text-white font-bold text-lg font-poppins underline'>Sign Up</Text>
                                </Link>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
