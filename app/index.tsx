import Button from "@/components/Button"
import { Link } from "expo-router"
import { View } from "react-native"

const index = () =>{
    
    return(
        <View className="flex-1 items-center justify-center p-10">
            <Link href={'/(user)/menu'} asChild>
                <Button text="User" />
            </Link>
            <Link href={'/(admin)/menu'} asChild>
                <Button text="Admin" />
            </Link>
        </View>
    )
}

export default index;