import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [num1, setNumber1] = React.useState(0);
  const [num2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const calcular = () => {
    const result = num1 + num2;
    setResult(result);
     console.log(num1, num2, result);
  };
  // console.log(num1, num2, result);

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
      <Text style={styles.txtTitulo}>Cálculo</Text>
      <View style={styles.numeros}>
        <TextInput
          keyboardType='numeric'
          style={styles.numero}
          value={num1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.numero}
          value={num2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
        <Button onPress={calcular} title="SOMAR" />
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topo: {
    backgroundColor: '#fff',
    padding: 10,
    width:'40%',
    height:'60%',
    alignItems: 'center',
    borderRadius:'5%',
  },
  txtTitulo: {
    padding:20,
    fontSize: 25,
    color: '#000',
  },
  numeros: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numero: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: '20%',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
    padding:10,
    borderColor:'#2196F3',
  },
  result: {
    fontSize:25,
    marginTop:-10,
    color: '#000',
  },
});
