import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DefaultButton } from "../CommonUI";

const SharePenaltyControls = ({ 
    setGlobalState,
    globalState,
}) => {
    const onPenaltyPress = () => {
        setGlobalState({
            showPenalty: true,
            header: "penalty",
            footer: "continueControls",
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

export default SharePenaltyControls;