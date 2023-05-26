import React from "react";
import { ScrollView, Image } from "react-native";
import PageTitle from "../../components/PageTitle";
import MenuHome from "../../components/MenuHome";
import HoloList from "../../components/HoloList";
import { hologramas } from "../../data/data.js"


export default function HomePage({navigation}) {
    return (
    <ScrollView>
      <PageTitle>Pagina Inicial</PageTitle>
      <Image source={require('../../../assets/img/IronMan.jpg')}></Image>
      <MenuHome navigation={navigation}/>
      <HoloList items={hologramas}></HoloList>
    </ScrollView>
    )
}