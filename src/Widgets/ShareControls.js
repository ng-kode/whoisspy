import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DefaultButton } from "../CommonUI";

const ShareControls = ({ 
    setGlobalState,
    globalState,
}) => {
    const onPenaltyPress = () => {
        setGlobalState({
            showPenalty: true,
            header: "penalty",
            footer: "roundCompleteControls",
        })
    }

    return (
    <View>
        <DefaultButton
            title="SHARE"
            onPress={() => {}}
        />
        <DefaultButton
            title="NEXT"
            onPress={onPenaltyPress}
        />
    </View>
)};

export default ShareControls;