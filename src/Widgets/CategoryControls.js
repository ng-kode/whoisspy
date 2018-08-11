import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const CategoryControls = ({ onOkayPress, onCancelPress }) => (
    <View>
        <DefaultButton
            title="OK"
            onPress={onOkayPress}
        />
        <DefaultButton
            title="Cancel"
            onPress={onCancelPress}
        />
    </View>
);

export default CategoryControls;