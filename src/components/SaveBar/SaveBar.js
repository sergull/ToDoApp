import React, { useState } from "react";
import { View, TextInput, TouchableOpacity,Text, Alert,Button } from "react-native";
import styles from './SaveBar.styles'

const SaveBar = ({toDo,setTodo}) => {

    //listenin değerleri değişiyor.diziye ekleniyor.ekranda gösterilmiyor
    const[TodoValue,setTodoValue]=useState("");

    pressButton=(text)=>{
        if(text===""){
            return Alert.alert("Lütfen ilgili alanı doldurunuz");
        }
        if(toDo.some(ToDoItem=>ToDoItem.title==text)){
            return Alert.alert("Bunu zaten yapacaksınız");
        }
        else{
            const newTodo={
                id: new Date().getTime().toString(),
                title: TodoValue,
                isDone:false
            };
            setTodo([...toDo, newTodo]);
            setTodoValue("");
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <TextInput color={"#FA8973"} style={styles.input} placeholder="Yapılacaklar..." onChangeText={setTodoValue} value={TodoValue}></TextInput>
            </View>


            <View style={styles.button}>
                <Button title='Kaydet' color="lemonchiffon" onPress={()=>pressButton(TodoValue)}></Button>
            </View>

        </View>
    );
}

export default SaveBar;