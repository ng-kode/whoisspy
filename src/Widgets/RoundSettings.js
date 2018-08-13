import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { DefaultButton, FloatingButton } from '../CommonUI';

const RoundSettings = ({
    globalState,
    setGlobalState,
}) => {

    const {
        numSpies,
        numPlayers, 
        selectedCatIds,
    } = globalState;

    const setNumSpies = sign => {
        setGlobalState({
            numSpies: numSpies + parseInt(sign + 1)
        })
    }

    const setNumPlayers = val => {
        setGlobalState({
            numPlayers: val
        })
    }

    const onSelectCatClick = () => {
        setGlobalState({
            core: "cat",
            tmpCatIds: selectedCatIds,
            footer: "categoryControls",
        })
    }
    
    return (
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
)};

const styles = StyleSheet.create({
    numSpyContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default RoundSettings;