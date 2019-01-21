import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends React.Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa/ (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc
    this.setState(s)

    if(s.resultado <16){
      s.resultadoText = "Magreza grave"
    } else if(s.resultado<17){
      s.resultadoText = "Magreza moderada"
    } else if(s.resultado<18.5){
      s.resultadoText = "Magreza leve"
    } else if(s.resultado<25){
      s.resultadoText = "Saudável"
    } else if(s.resultado<30){
      s.resultadoText = "Sobrepeso"
    } else if(s.resultado<35){
      s.resultadoText = "Obesidade grau I"
    } else if(s.resultado<40){
      s.resultadoText = "Obesidade grau II"
    } else {
      s.resultadoText = "Obesidade grau III"
    }
    
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.Titulo}>Primeiro App em React Native!</Text>
      <Text style={styles.Titulo}>Calculadora de IMC</Text>

        <View style={styles.entrada}>        
          <TextInput 
            placeholder="Altura" 
            keyboardType="numeric" 
            style={styles.input} 
            onChangeText={(altura)=>{this.setState({altura})}}
          />

          <TextInput 
            placeholder="Massa" 
            keyboardType="numeric" 
            style={styles.input} 
            onChangeText={(massa)=>{this.setState({massa})}}
          />

        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.Resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.Resultado, {fontSize: 35}]}>{this.state.resultadoText}</Text>


        <Text style={styles.Assinatura}>By: Rafael Lopes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    color:'gray',
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  entrada: {
    flexDirection: 'row',
  },
  buttonText: {
    alignSelf:'center',
    padding: 30,
    fontSize: 25,
    color:'#6dc4a4',
    fontWeight: 'bold',
  },
  Resultado:{
    alignSelf:'center',
    color:'gray',
    fontSize:65,
    padding:15,
  },
  Assinatura:{
    alignSelf:'flex-end',
    color:'gray',
    fontSize:20,
    marginBottom: 40,
  },
  Titulo:{
    marginTop: 40,
    backgroundColor: '#89ffa5',
    alignSelf:'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

