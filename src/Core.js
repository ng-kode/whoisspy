import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultButton from './CommonUI/DefaultButton';

const Core = () => (
    <View style={styles.container}>
        <DefaultButton
            title="選擇種類"
            onPress={() => console.warn("Select Cat !")}
        />

        <Text>
            Game Info Here
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        flex: 4.8,
        width: "100%",
    }
})

export default Core;