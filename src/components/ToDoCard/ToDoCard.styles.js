import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        margin:8,
        flexDirection: "column",
        borderWidth:1,
        borderColor:"transparent",
        borderRadius:5,
        backgroundColor:"#D0E6A5"
    },
    text:{
        fontSize:20,
        padding:10,
        color:"#FA8973",

    },
    textIsDone:{
        fontSize:20,
        padding:10,
        color:"#FA8973",
        textDecorationLine: 'line-through',
    },
    containerIsDone:{
        margin:8,
        flexDirection: "column",
        borderWidth:1,
        borderColor:"transparent",
        borderRadius:5,
        backgroundColor:"lightgrey"

    }

});