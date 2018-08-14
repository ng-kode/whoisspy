import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const GuessControls = ({
    globalState,
    setGlobalState,
}) => {
    const {

    } = globalState;

    const onResetPress = () => {
        setGlobalState({
            modalContent: "confirmReset",
            modalVisible: true,
        })
    }

    return (
        <View>
            <DefaultButton
                title="RESET"
                onPress={onResetPress}
            />
        </View>
    )
};

export default GuessControls;