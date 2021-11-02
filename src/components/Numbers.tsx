import React from 'react';
import { Pressable, Text, View } from 'react-native';

type NumberProps = {
    title : number
}
const Numbers = ({title} : NumberProps) => {
    return (
        <View>
            <Pressable onPress={() => console.log('Add Method')}>
                <Text>
                    {title}
                </Text>
            </Pressable>
        </View>
    )
} 
export default Numbers;