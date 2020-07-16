import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{ ...styles.cardd, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    cardd: {
        padding: 30,
        // shadowColor:'black',
        // shadowOffset:{width:0,height:2},
        // shadowRadius:6,
        // shadowOpacity:0.26,
        backgroundColor: 'white',
        elevation: 12,
        borderRadius: 40

        //shadow property only works for iphone
        //elevation property only works for andriod

    },

})

export default Card