import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { DefaultButton, FloatingButton } from '../CommonUI';

const RoundSettings = ({
    numSpies,
    numPlayers,
    setNumSpies, 
    setNumPlayers, 
    onSelectCatClick 
}) => (
    <View>
        <DefaultButton
            title="選擇種類"
            onPress={onSelectCatClick}
        />

        <Text>遊玩人數: {numPlayers}</Text>
        <Slider
            maximumValue={10}
            minimumValue={4}
            value={numPlayers}
            step={1}
            onValueChange={setNumPlayers}
        />

        <View style={styles.numSpyContainer}>
            <Text>臥底人數: {numSpies}</Text>
            <FloatingButton
                title="+"
                onPress={() => setNumSpies("+")}
            />
            <FloatingButton
                title="-"
                onPress={() => setNumSpies("-")}
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