import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import Parlmpar from './componentes/Parlmpar'
import { Inverter, MegaSena } from './componentes/Muilti'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador:{
        screen : () => <Contador  /> 
    },
    MegaSena: {
       
        screen: () => < MegaSena />,
        navigationOptions : { title: 'Mega Sena ' },
    },
    Inverter: {
        screen: () => <Inverter texto='Wagner' />
    },
    Parlmpar: {

        screen: () => <Parlmpar numero={30} />,
        navigationOptions :{ title: 'Par & Impar' },


    },
    Simples: {
        screen: () => <Simples texto='Simples' />
    }



}, { drawerWidth: 300 })