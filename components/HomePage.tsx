import React from "react";
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomePage({ navigation }: any): React.JSX.Element {


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView horizontal={true} style={styles.carousel}>
                    <Image source={require('../assets/images/four_greyscale.jpeg')} style={styles.image}/>
                    <Image source={require('../assets/images/commentary.jpg')} style={styles.image}/>
                    <Image source={require('../assets/images/adam.jpeg')} style={ {...styles.image, marginRight: 0} }/>
            </ScrollView>

            <View style={styles.welcome_blurb}>

                <Ionicons name={'trophy-outline'} size={95} color={'white'} style={{ marginTop: 80 }}/>

                <View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Adam's Smash Series</Text>
                </View>

                <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
                    [ASS] is a weekly Super Smash Bros. Melee™ tournament{"\n"}
                    hosted in Portland, Oregon Every Wednesday!
                </Text>

                <Button title='Register' color={'tomato'} onPress={() => navigation.navigate('Events')}/>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        height: 350,
        width: 350,
        marginRight: 10,
        borderRadius: 16
    },
    carousel: {
        margin: 0,
        padding: 0
    },
    welcome_blurb: {
        display: 'flex',
        alignItems: 'center'
    }
  });

export default HomePage;