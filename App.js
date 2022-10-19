import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from 'expo-constants'

export default function App() {
  const [resultado, setResultado] = React.useState(0);
  const [text, setText] = React.useState("");

  const CaF = () => {
    const res = Number.parseFloat(resultado * (9 / 5));
    setText(Number.parseFloat(res) + 32 + "°F");
  };

  const FaC = () => {
    const res = Number.parseFloat(resultado) - 32;
    setText(Number.parseFloat(res * (5 / 9)) + "°F");
  };

  const KaF = () => {
    const res = Number.parseFloat(resultado) + 459.65;
    setText((Number.parseFloat(res) * 5) / 9 + "°F");
  };

  return (
    <SafeAreaView style={s.mainContainer}>
      <Text>Conversor de temperaturas</Text>
      <TextInput
        onChangeText={setResultado}
        placeholder="Ingresa la temperatura "
        keyboardType="numeric"
        style={s.input}
      ></TextInput>
      <Text>Resultado</Text>
      <Text>{text ? text : ""}</Text>

      <TouchableOpacity  style={s.btn} onPress={CaF}>
        <Text> °C => °F </Text>
      </TouchableOpacity>

      <TouchableOpacity  style={s.btn} onPress={FaC}>
        <Text> °F => °C </Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={s.btn} onPress={() => setText(Number.parseFloat(resultado) + 459.67 + "°K")}
      >
        <Text>°F => °K</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={s.btn} onPress={KaF}>
        <Text>°K => °F</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={s.btn} onPress={() => setText(Number.parseFloat(resultado) + 273.15 + "°K")}
      >
        <Text>°C => °K </Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={s.btn} onPress={() => setText(Number.parseFloat(resultado) - 273.15 + "°C")}
      >
        <Text>°K => °C  </Text>
      </TouchableOpacity>

      <StatusBar />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  mainContainer:{
    marginTop: Constants.statusBarHeight,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'left',
    backgroundColor:'#EDEDE7',
   
  },
  btn:{
    padding:20,
    margin:4,
    backgroundColor:'#C3AAD9',
    borderRadius:10,
    width: '35%',
    height: '8%',
    alignItems: 'center',
    fontSize: 7,

  }


})