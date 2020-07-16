import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'

import Card from '../Components/Card'
import NumberContainer from '../Components/NumberContainer'
import Color from '../Constants/Color'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    else {
        return randomNumber
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const[rounds,setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice, onGameOver} = props

    //useEffect is executed after the render cycle

    useEffect(() => {
        if (currentGuess === userChoice){
            onGameOver(rounds)
        }
    },
    [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Incorrect','Try something else',[{text:"Try again",style:"cancel"}])
            return
        }
        if (direction === 'lower'){
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currRounds => currRounds + 1)
    }
        return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
            <View style={styles.buttonSize}><Button color="pink" title="Lower" onPress={nextGuessHandler.bind(this,'lower')}/></View>
            <View style={styles.buttonSize}><Button color="pink" title="Greater" onPress={nextGuessHandler.bind(this,'greater')}/></View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSize: {
        width: 80,
    },
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
        backgroundColor:Color.main
    }

})

export default GameScreen