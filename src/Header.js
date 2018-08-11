import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.container}>
        <Text>誰是臥底</Text>
        <Text>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "steelblue",
        backgroundColor: "lightblue",
        flex: 0.9,
        width: "100%",
    }
})

export default Header;