import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { DefaultButton, FloatingButton } from '../CommonUI';

const RoundSettings = ({ onSelectCatClick }) => (
    <View>
        <DefaultButton
            title="選擇種類"
            onPress={onSelectCatClick}
        />

        <Text>遊玩人數</Text>
        <Slider
            maximumValue={10}
            minimumValue={4}
            step={1}
        />

        <View style={styles.numSpyContainer}>
            <Text>臥底人數: {6}</Text>
            <FloatingButton
                title="+"
                onPress={() => console.warn("Add Spy !")}
            />
            <FloatingButton
                title="-"
                onPress={() => console.warn("Remove Spy !")}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    numSpyContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default RoundSettings;