import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";
import { captureScreen } from "react-native-view-shot";
import Share from 'react-native-share';

const ShareControls = ({ 
    setGlobalState,
    globalState,
}) => {

    const onSharePress = async () => {
        const url = await captureScreen({
            format: "jpg",
            quality: 0.8
        });
        console.log(url);

        const options = {
            url,
            title: '分享',
            message: '我正在遊玩誰是臥底!',
            subject: '我正在遊玩誰是臥底!' //  for email
        }

        const res = await Share.open(options);
        console.log(res);
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