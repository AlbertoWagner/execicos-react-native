import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/padrao'
const fonte = { style: { fontSize: 30 } }


const Entrada  = (props) => 
        <View>
            <TextInput 
            value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar}/>
        </View>

export default class TextoSicronizado extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })

    }

    render(){
        return(
            <View>
                <Text style={Padrao.fonte40}> {this.state.texto} </Text>
                <Entrada value={this.state.texto}  style={Padrao.input} chamarQuandoMudar={this.alterarTexto}/>
            </View>
        )
    }

} 