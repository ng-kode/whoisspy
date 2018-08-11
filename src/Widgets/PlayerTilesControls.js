import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const PlayerTilesControls = ({ onResetPress, showGuess, onGuessPress }) => (
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
);

export default PlayerTilesControls;