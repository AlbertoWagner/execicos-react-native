import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import Parlmpar from './componentes/Parlmpar'
import { Inverter, MegaSena } from './componentes/Muilti'
import Contador from './componentes/Contador'
import NotAndroid from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo  from './componentes/ComunicaçaoDireta'
import ComunicacaoIndireta from './componentes/ComunicacaoIndireta'

export default createDrawerNavigator({

    ComunicacaoIndireta : {
        navigationOptions: { title: 'Comunicacao Indireta' },

        screen : () => <ComunicacaoIndireta></ComunicacaoIndireta>


    },

    Avo :{
        screen : () =>
        <Avo nome={'jose'}  sobrenome={'silva'}></Avo>
    },

    Evento: {
        screen: Evento

    },

    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },

    NotAndroid: {
        screen: () => <NotAndroid />

    },

    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {

        screen: () => < MegaSena />,
        navigationOptions: { title: 'Mega Sena ' },
    },
    Inverter: {
        screen: () => <Inverter texto='Wagner' />
    },
    Parlmpar: {

        screen: () => <Parlmpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' },


    },
    Simples: {
        screen: () => <Simples texto='Simples' />
    }



}, { drawerWidth: 300 })