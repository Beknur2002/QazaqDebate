import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NearEvents = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/200/300',
      name: 'Alau Cup',
      addres: 'Papaya Beach',
      quantityPeopls: 15,
      date: 'Saturday, May 30',
      host: true,
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/200/300',
      name: 'Mahabbat Mekeni',
      addres: 'Pink Loft',
      quantityPeopls: 12,
      date: 'Saturday, May 22',
      host: true,
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/200/300',
      name: 'Apa Cup',
      addres: 'Walker street',
      date: 'Saturday, May 25',
      quantityPeopls: 22,
      host: true,
    },
    {
        id: 4,
        imgUrl: 'https://picsum.photos/200/300',
        name: 'Senim Cup',
        addres: 'Walker street',
        date: 'Saturday, May 25',
        quantityPeopls: 22,
        host: true,
      },
      {
        id: 5,
        imgUrl: 'https://picsum.photos/200/300',
        name: 'NU Cup',
        addres: 'Walker street',
        date: 'Saturday, May 25',
        quantityPeopls: 22,
        host: true,
      },
      {
          id: 6,
          imgUrl: 'https://picsum.photos/200/300',
          name: 'Kultegin XXI',
          addres: 'Walker street',
          date: 'Saturday, May 25',
          quantityPeopls: 22,
          host: true,
        },
  ];
  
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
          <FlatList
            data={NearEvents}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    height: 120,
                    width: 150,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    marginRight: 15,
                  }}>
                  <Image
                    source={{uri: item.imgUrl}}
                    style={{
                      height: '80%',
                      width: '100%',
                      borderRadius: 15,
                    }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14, fontWeight: '400', color: '#8F8F8F'}}>{item.name}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer:{
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        paddingVertical: 10
    }
})