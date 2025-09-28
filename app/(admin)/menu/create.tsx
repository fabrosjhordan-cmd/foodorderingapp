import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const CreateScreen = () =>{
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const validInput = () =>{
        setError('');
        if(!name){
            setError('Name is required');
            return false;
        }
        if(!price){
            setError('Price is required');
             return false;
        }
        if(isNaN(parseFloat(price))){
            setError('Price should be a number');
             return false;
        }
        return true;
    }

    const onCreate = () =>{
        if(!validInput()){
            return true;
        }

        console.warn('Creating dish');
        setName('');
        setPrice('');
        setImage('');
        router.back();
    }

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result);

        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }

    const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
    return(
    <View className="p-5">
        <Image 
            source={{uri: image || defaultPizzaImage}}
            className="w-[50%] aspect-square self-center border border-1 border-gray-300 rounded-2xl bg-gray-200"
            resizeMode="contain"
        />
        <Text onPress={pickImage} className="self-center font-bold text-blue-600 my-10">
            Select Image
        </Text>
        <Text className="text-gray-500">Name</Text>
        <TextInput 
            value={name}
            onChangeText={setName}
            placeholder="Pizza Name"
            className="border border-1 border-gray-500 bg-white rounded-md"
            style={{marginTop: 5, marginBottom: 20, padding: 10 }}
        />
        
        <Text className="text-gray-500">Price ($)</Text>
        <TextInput 
            value={price}
            onChangeText={setPrice}
            placeholder="$12.00"
            className="border border-1 border-gray-500 bg-white rounded-md"
            style={{marginTop: 5, marginBottom: 20, padding: 10 }}
            keyboardType="numeric"
        />
        <Text className="text-red-700 items-center mb-2">{error}</Text>
        <Button onPress={onCreate} text="Create" />
    </View>
    )
}

export default CreateScreen;