import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const PlayerTilesControls = ({ 
    showGuess, 
    setGlobalState 
}) => {
    const onGuessPress = () => {
        setGlobalState({
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