import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "./components/Title.js";
import SaveBar from "./components/SaveBar";
import ToDoCard from './components/ToDoCard';

export default function App() {

  //listenin elemanları eklenip çıkıyor.ekranda gösteriliyor
  const[toDo,setTodo]=useState([]);
  const[counter,setCounter]=useState(0);

  useEffect(()=>{
    const newTodoList=(toDo.filter(item=>item.isDone===false));
    const length=newTodoList.length;
    setCounter(length);
  },[toDo])


  //map()İşlevin orijinal diziyi değiştirmediğini unutmayın ; bunun yerine, orijinal diziden değiştirilen öğelerle yeni bir dizi oluşturur.
  const changeStyle = id => {
    const newTodo = toDo.map(item => {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });
    setTodo(newTodo);
  };

  const delteItem = item => {
    setTodo(toDo.filter(todoItem => todoItem !== item));
  };
  
  const renderList=({item})=>
  <TouchableOpacity onPress={()=>changeStyle(item.id)} onLongPress={()=>delteItem(item)}>
    <ToDoCard list={item} isDone={item.isDone}/>
  </TouchableOpacity>;

  return (
    <SafeAreaView style={styles.container}>
      <Title count={counter}/>
      <FlatList
        data={toDo}
        renderItem={renderList}
        keyExtractor={item=>item.id.toString()}
      ></FlatList>

      <SaveBar toDo={toDo} setTodo={setTodo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`lemonchiffon`,
    
  },
});
