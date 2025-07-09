import SmallLogo from '@assets/images/sentria-small.svg';
import { ImageBackground, Text, View } from 'react-native';

const backgroundImage = require('@assets/images/welcome-bg.jpg');
export default function WelcomeScreen() {
    return (
        <ImageBackground className='flex-1 items-center justify-center' source={backgroundImage}>
            <View className='flex-1 items-center justify-center bg-black/50 p-4 w-full'>
                <View className='flex flex-col items-center justify-center gap-y-5'>
                    <SmallLogo />
                    <View className='flex flex-col items-center gap-y-2'>
                        <Text className='text-white font-poppins text-4xl uppercase font-black'>Welcome</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
