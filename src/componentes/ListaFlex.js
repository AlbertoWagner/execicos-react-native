import React from 'react'
import {ScrollView,View,FlatList,Text} from 'react-native'

 const alunos = [ 
    {id : 1 , nome: 'João', nota:7.9},
    {id : 2 , nome: '3oão', nota:1.9},
    {id : 3 , nome: 'maria', nota:2.9},
    {id : 4 , nome: 'alberto', nota:9.9},
    {id : 5 , nome: 'wagner', nota:8.9},
    {id : 6 , nome: 'ieuie', nota:2.9},
    {id : 7 , nome: 'ere', nota:3.9},
    {id : 8 , nome: 'Jrrroão', nota:5.9},
    {id : 9 , nome: 'Jrrtoão', nota:7.9},
    {id : 10 , nome: 'João', nota:7.9},
    {id : 11 , nome: '3oão', nota:1.9},
    {id : 12, nome: 'maria', nota:2.9},
    {id : 13 , nome: 'alberto', nota:9.9},
    {id : 14, nome: 'wagner', nota:8.9},
    {id : 15, nome: 'ieuie', nota:2.9},
    {id : 16, nome: 'ere', nota:3.9},
    {id : 17, nome: 'Jrrroão', nota:5.9},
    {id : 18, nome: 'Jrrtoão', nota:7.9}
]

const itemEstilo = {
    paddingHorizontal : 15 ,
    height : 50 ,
    borderWidth : 0.5 ,
    borderColor : '#222',
    // Flex
    alignItems :'center',
    justifyContentet: 'flex-end'

}

export const Aluno = props =>
    
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style = {{fontWeight:'bold'}}>Nota: {props.nota}</Text>
        </View>

    
export default  props => {
    const renderItem = ({item}) =>
    {
        return <Aluno {...item}/>
    }
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_,index)=> index.toString()}/>
        </ScrollView>
    )
}