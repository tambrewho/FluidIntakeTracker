import React, { Component } from "react";
import {useState} from "react";
import { Text, TextInput, View } from "react-native";

const CounterComponent = () => {
    const [count, setCount] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Type your name here!"
                onChangeText={count => setCount(count)}
                defaultValue={count}
            ></TextInput>
            <Text>Hello {count}!</Text>
        </View>
    );
}

export default CounterComponent;