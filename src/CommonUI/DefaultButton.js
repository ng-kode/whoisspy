import React, { Component } from "react";
import { View, Button, StyleSheet } from 'react-native';

const DefaultButton = (props) => (
    <View style={[styles.btnContainer, props.btnContainerStyle]}>
        <Button
            {...props}
            title={props.title}
            onPress={props.onPress}            
        />
    </View>
);

const styles = StyleSheet.create({
    btnContainer: {
        width: 100,
    }
})

export default DefaultButton;