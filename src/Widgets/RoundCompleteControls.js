import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const RoundCompleteControls = ({
    globalState,
    setGlobalState
}) => {
    const onContinuePress = () => {
        setGlobalState({
            modalContent: "continueOrReset",
            modalVisible: true,
        })
    }

    return (
    <View>
        <DefaultButton
            title="CONTINUE"
            onPress={onContinuePress}
        />
    </View>
)};

export default RoundCompleteControls;