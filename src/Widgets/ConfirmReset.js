import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultButton } from "../CommonUI";
import { INITIAL_STATE } from '../WhoIsSpy';

const ConfirmReset = ({
    globalState,
    setGlobalState,
    dismissModal
}) => {
    const {
        
    } = globalState;

    const onOkayPress = () => {
        setGlobalState(INITIAL_STATE);
        dismissModal();
    }

    const onCancelPress = () => {
        dismissModal();
    }

    return (
        <View>
            <Text>重新設定？</Text>
            <DefaultButton
                title="OK"
                onPress={onOkayPress}
            />
            <DefaultButton
                title="CANCEL"
                onPress={onCancelPress}
            />
        </View>
    );
}

export default ConfirmReset;