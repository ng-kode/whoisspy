import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";
import { captureScreen } from "react-native-view-shot";

const ShareControls = ({ 
    setGlobalState,
    globalState,
}) => {

    const onSharePress = async () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        }).then(console.log);
    }

    const onNextPress = () => {
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
            onPress={onSharePress}
        />
        <DefaultButton
            title="NEXT"
            onPress={onNextPress}
        />
    </View>
)};

export default ShareControls;