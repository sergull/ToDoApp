import React from "react";
import {SafeAreaView,Text} from "react-native";
import styles from "./ToDoCard.styles";



const ToDoCard= ({list, isDone})=>{

    return(
        isDone
        ?
        <SafeAreaView style={styles.containerIsDone}>
            <Text style={styles.textIsDone}>{list.title}</Text>
        </SafeAreaView>
        :
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{list.title}</Text>
        </SafeAreaView>
    )
        
}

export default ToDoCard;