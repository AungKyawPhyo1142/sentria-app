import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-4xl font-bold">Welcome</Text>
            <Link href="/login" asChild>
                <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded">
                    <Text className="text-white">Login</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}
