import { Link } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';

const backgroundImage = require('@assets/images/welcome-bg.jpg');
export default function WelcomeScreen() {
    return (
        <ImageBackground className='h-full' source={backgroundImage}>
            <Text className="text-4xl font-bold">Welcome</Text>
            <Link href="/login" asChild>
                <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded">
                    <Text className="text-white">Login</Text>
                </TouchableOpacity>
            </Link>
        </ImageBackground>
    );
}
