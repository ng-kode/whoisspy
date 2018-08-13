import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DefaultButton } from "../CommonUI";

const SharePenaltyControls = ({ onPenaltyPress }) => (
    <View>
        <DefaultButton
            title="SHARE"
            onPress={() => {}}
        />
        <DefaultButton
            title="NEXT"
            onPress={onPenaltyPress}
        />
    </View>
);

export default SharePenaltyControls;