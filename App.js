import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo,FontAwesome5} from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

import TelaInicio from './componentes/TelaInicio';
import TelaSobre from './componentes/TelaSobre';
import TelaVitorias from './componentes/TelaVitorias';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'#eecb01'
          },
          headerTitleStyle:{
            fontWeight:'bold'
          },
          tabBarStyle:{
            backgroundColor:'#eecb01'
          },
          tabBarActiveTintColor:'#D30707',
          tabBarInactiveTintColor:'#000',
          tabBarActiveBackgroundColor:'#fff',
        }}
      >
        <Tabs.Screen 
        name='Início' component={TelaInicio}
        options={{
          tabBarIcon:({color})=>(
            <Entypo name="home" color={color} size={20}/>
          )
        }}
        />
        <Tabs.Screen 
        name='Sobre' 
        component={TelaSobre}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome5 name="question-circle" color={color} size={20}/>
          )
        }}
        />
        <Tabs.Screen 
        name='Vitórias' 
        component={TelaVitorias}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome5 name="trophy" color={color} size={20}/>
          )
        }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

