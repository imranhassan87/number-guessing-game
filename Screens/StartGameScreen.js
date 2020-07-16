import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Card from '../Components/Card'
import Color from '../Constants/Color'
import Input from '../Components/Input'


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("What are you doing Idiot!!", "Enter some valid value!!!",
            [{text:'Okay!',style:'destructive',onPress: resetHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }
    let confirmedOutput
    if (confirmed) {
        confirmedOutput = 
        <Card style={styles.chosen}>
        <Text style={styles.headerTitle} >You selected</Text>
        <View style={styles.number}><Text>{selectedNumber}</Text></View>
        <View style={styles.buttonS}><Button color={Color.primary} title="Start Game" 
        onPress={() => props.onStartGame(selectedNumber)}/></View>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.view1}><Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.headerTitle}>Select a number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonSize}><Button color={Color.primary} title="Reset"
                            onPress={resetHandler} /></View>
                        <View style={styles.buttonSize}><Button color={Color.secondary} title="Confirm"
                            onPress={confirmHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({

    view1: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor:Color.main,
        color:'white'

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,


    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color:'white'
    },
    buttonSize: {
        width: 80,
    },
    input: {
        width: 40,
        textAlign: 'center'
    },
    chosen:{
        backgroundColor:Color.main,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        borderWidth:2,
        alignItems:'center',
        width:40,
        backgroundColor:'white',
        borderRadius:7,
        padding:2,
        marginTop:10,
        justifyContent:'center',
        
    },
    buttonS:{
        width: '40%',
        paddingTop:10,
        justifyContent:'center'

    },
    headerTitle: {
        color:'white',
        fontSize:16,
    }

})

export default StartGameScreen