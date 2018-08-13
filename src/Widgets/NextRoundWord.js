import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const NextRoundWord = ({
    setGlobalState,
    globalState,    
    dismissModal,
    word,
}) => {
    const {
        players,
        modalPlayerId,
    } = globalState;

    const onWordSeenPress = () => {
        players[modalPlayerId] = {
            ...players[modalPlayerId],
            wordSeen: true,
        }

        const showGuess = players.every(p => p.wordSeen);

        setGlobalState({
            players,
            showGuess,
        }, (newState) => {
            dismissModal();
        })
    }

    return (
    <View>
        <Text>NextRoundWord</Text>
        <Text>{word}</Text>
        <DefaultButton
            title="OK"
            onPress={onWordSeenPress}
        />
    </View>
)};

export default NextRoundWord;