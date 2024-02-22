import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import RTTextEntry from './rt-text-entry';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function WorkoutEntryRow(){
    return (
        <View style={{flexDirection: 'row'}}>
            <RTTextEntry style={styles.workoutEnty} placeholder="Workout"/>
            <RTTextEntry style={styles.repEntry} placeholder="Reps"/>
            <RTTextEntry style={styles.weightEnty} placeholder="Weight"/>
        </View>
    )
}

let styles = StyleSheet.create({
    workoutEnty:{
        flex:5,
        margin: 4
    },

    repEntry:{
        flex:1,
        margin: 4
    },

    weightEnty:{
        flex:1,
        margin: 4
    }
})