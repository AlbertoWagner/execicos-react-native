import React from 'react'
import {Text,View} from 'react-native'
import Padrao from '../estilo/padrao'

const ParImpar = (num) =>  num % 2 == 0 ? 'Par' : 'Impar'

export default props =>
    <View>
        {
          <Text style={Padrao.ex}>{ParImpar(props.numero)}</Text> 
        }

    </View>

