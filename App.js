import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Screens/GameScreen'
import GameOverScreen from './Screens/GameOverScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const playAgainHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} correctNumber={userNumber} onRestart={playAgainHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: 'black'
  }

});
