import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const PlayerTilesControls = ({ 
    globalState,
    setGlobalState 
}) => {
    const {
        showGuess, 
    } = globalState;

    const onGuessPress = () => {
        setGlobalState({
            header: "nowKilling",
            footer: "guessControls",
            modalContent: "keywordOrKill"
        });
    }

    return (
    <View>
        <DefaultButton
            title="RESET"
            onPress={() => {}}
        />
        {showGuess && <DefaultButton
            title="GUESS!"
            onPress={onGuessPress}
        />}
    </View>
)};

export default PlayerTilesControls;