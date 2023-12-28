import { View,Text } from "react-native";
import Box from "./Box";

export default function Welcome({name}){
    return(
        <View  >
            <Text>Hello,{name}</Text>
            <Box text={"heloooo"} style={{color:'#'}}/>
        </View>
    )
}