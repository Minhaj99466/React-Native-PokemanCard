import {StyleSheet, Text, View} from 'react-native';


export default function Box({children,styleX}){
    return(
        <View style={[styles.box,styleX]}>
            <Text style={styles.text} >{children}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    box:{
        padding:20,
        backgroundColor:'#fff',
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'

    }

})