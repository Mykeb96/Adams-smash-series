import React from "react";
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
  } from 'react-native';

function Profile(): React.JSX.Element {

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });

export default Profile;