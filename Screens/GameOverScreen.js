import React from 'react'
import {View,StyleSheet,Text, Button} from 'react-native'

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>You Won! :)</Text>
            <Text style={styles.title}>Number of rounds you took: {props.roundsNumber} </Text>
            <Text style={styles.title}>Number was: {props.correctNumber}</Text>
            <View style={styles.buttonContainer}><Button color="#27AE60" title="Play Again" onPress={props.onRestart}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:35,
    },
    title:{
        color:"white",
        fontSize:18
    },
    buttonContainer:{
        padding:10
    }
    
})

export default GameOverScreen