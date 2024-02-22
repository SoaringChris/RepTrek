import * as React from 'react';
import { TextInput, StyleSheet, TextStyle } from 'react-native';

type RTTextEntryProps = {
    placeholder: string
    style?: TextStyle
}

export default function RTTextEntry(props: RTTextEntryProps){
    return (
        <TextInput
            style={[styles.entry, props.style]}
            placeholder={props.placeholder}
         />
    )
}

const styles = StyleSheet.create({
    entry:{
        padding: 4,
        backgroundColor: 'white'
    }
})