import React, { forwardRef } from "react";
import { Pressable, Text, View } from "react-native";


type ButtonProps = {
    text: string;
}& React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
    ({text, ...pressableProps}, ref)=>{
        return (
            <Pressable ref={ref} {...pressableProps} className='bg-blue-600 py-5 items-center rounded-2xl my-auto' style={{paddingHorizontal: 72}}>
                <Text className='text-md font-semibold text-white'>{text}</Text>
            </Pressable>
        )
    }
)

export default Button;