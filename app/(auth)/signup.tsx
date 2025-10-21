import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const SignUpScreen = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View className="p-5 justify-center flex">
            <Stack.Screen options={{title: 'Sign Up'}}/>
            <Text className="text-gray-500">Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="###@gmail.com"
                className="border border-1 border-gray-300 p-3 mt-3 mb-5 bg-white rounded-md"
            />
            <Text className="text-gray-500">Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder=""
                className="border border-1 border-gray-300 p-3 mt-3 mb-5 bg-white rounded-md"
                secureTextEntry
            />
            <Button text="Create Account"/>
            <Link href='../' className="self-center text-blue-600 mt-7">
                Sign In
            </Link>

        </View>
    )
}

export default SignUpScreen;