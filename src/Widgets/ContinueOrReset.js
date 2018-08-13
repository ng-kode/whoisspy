import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const ContinueOrReset = ({ onResetPress, onContinuePress }) => (
    <View>
        <Text>ContinueOrReset</Text>
        <DefaultButton
            title="RESET"
            onPress={onResetPress}
        />
        <DefaultButton
            title="CONTINUE"
            onPress={onContinuePress}
        />
    </View>
);

export default ContinueOrReset;