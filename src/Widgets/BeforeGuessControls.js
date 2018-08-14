import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const BeforeGuessControls = ({ 
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
            onPlayerTilePress: "keywordOrKill"
        });
    }

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
        {showGuess && <DefaultButton
            title="GUESS!"
            onPress={onGuessPress}
        />}
    </View>
)};

export default BeforeGuessControls;