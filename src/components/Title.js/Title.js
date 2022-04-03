import React from "react";
import { View, Text } from "react-native";
import styles from "./Title.styles";


const Title = ({count})=>{
    return (
        <View style={styles.title_container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <View style={styles.count}>
                <Text style={styles.number}>{count}</Text>
            </View>
        </View>
    )
}

export default Title;
