      import React ,{ Component} from 'react'
      import {View , Text, StyleSheet } from 'react-native'
      import Simples from './componentes/Simples'
      import Parlmpar from './componentes/Parlmpar'


    export default class App extends Component {
      render(){
          return(
            <View style={styles.container}>
            <Simples texto='flexivel'></Simples>
          <Parlmpar numero={31}/>
            </View>
          )
        }
    }

    const styles = StyleSheet.create({
      container: {
        flex:1,
        justifyContent : 'center',
        alignItems :  'center' ,
      
      },
      f20 : {
        fontSize : 20
      }

    })