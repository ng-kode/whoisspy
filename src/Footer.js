import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import DefaultButton from "./CommonUI/DefaultButton";

const Footer = () => (
    <View style={styles.container}>
        <View style={styles.btnContainer}>
            <DefaultButton
                title="GO"
                onPress={() => console.warn("GO")}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: "palevioletred",
        flex: 1,
        width: "100%",
    },
})

export default Footer;