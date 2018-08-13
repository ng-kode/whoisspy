import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const NextRoundWord = ({ word, onWordSeenPress }) => (
    <View>
        <Text>NextRoundWord</Text>
        <Text>{word}</Text>
        <DefaultButton
            title="OK"
            onPress={onWordSeenPress}
        />
    </View>
);

export default NextRoundWord;