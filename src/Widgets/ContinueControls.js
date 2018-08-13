import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";

const ContinueControls = ({ onContinuePress }) => (
    <View>
        <DefaultButton
            title="CONTINUE"
            onPress={onContinuePress}
        />
    </View>
);

export default ContinueControls;