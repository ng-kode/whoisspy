import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const FloatingButton = (props) => (
    <TouchableOpacity
        style={[styles.btnContainer, props.btnContainerStyle]}
        {...props}
    >
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1089F5',
    },
    text: {
        fontSize: 24,
        color: 'white',
    }
})

export default FloatingButton;