import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";
import { getRandomInt } from '../WhoIsSpy';

const ContinueOrReset = ({     
    setGlobalState,
    globalState,
    dismissModal,
}) => {
    const {
        players,
        numSpies,
        numPlayers,
        roundNum,
        wordArr
    } = globalState;

    const onContinuePress = () => {
        let newPlayers = players.map(p => {
            return {
                ...p,
                role: 'c',
                wordSeen: false,
                alive: true,
                word: wordArr[roundNum + 1]['c']
            }
        });

        while (newPlayers.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            newPlayers[spyIdx].role = 's';
            newPlayers[spyIdx].word = wordArr[roundNum + 1]['s'];
        };

        setGlobalState({
            players: newPlayers,
            roundNum: roundNum + 1,
        }, (newState) => {
            setGlobalState({
                showGuess: false,
                showPenalty: false,
                result: {},
                footer: "playerTilesControls",
                modalContent: "nextRoundWord",
            })

            dismissModal();
        })
    }

    return (
        <View>
            <Text>ContinueOrReset</Text>
            <DefaultButton
                title="RESET"
                onPress={() => {}}
            />
            <DefaultButton
                title="CONTINUE"
                onPress={onContinuePress}
            />
        </View>
    )
};

export default ContinueOrReset;