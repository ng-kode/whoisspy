import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet, ToastAndroid } from 'react-native';
import { DefaultButton, FloatingButton } from '../CommonUI';
import CAT_GROUPS from "../data/CAT_GROUPS.json"

const RoundSettings = ({
    globalState,
    setGlobalState,
}) => {

    const {
        numSpies,
        numPlayers, 
        selectedCatIds,
        toasting,
    } = globalState;

    const doToast = msg => {
        if (toasting) {
            return;
        }

        setGlobalState({ toasting: true })
        ToastAndroid.show(msg, ToastAndroid.SHORT);

        setTimeout(() => {
            setGlobalState({ toasting: false });
        }, 2500);
    }

    const setNumSpies = sign => {
        const newNumSpies = numSpies + parseInt(sign + 1);

        if (newNumSpies === 0) {
            return doToast('臥底太少了');
        } else if (newNumSpies > numPlayers / 2 - 1) {
            return doToast('臥底太多了');
        }

        setGlobalState({
            numSpies: newNumSpies
        })
    }

    const setNumPlayers = val => {
        setGlobalState({
            numPlayers: val,
            numSpies: Math.round(val / 2 - 1)
        })
    }

    const onSelectCatClick = () => {
        setGlobalState({
            header: "selectCat",
            core: "cat",
            tmpCatIds: selectedCatIds,
            footer: "categoryControls",
        })
    }

    const selectedCat_str = CAT_GROUPS
        .filter(obj => selectedCatIds.includes(obj.categoryid))
        .map(obj => obj.name)
        .join('，');

    return (
    <View>
        <DefaultButton
            title={selectedCatIds.length ? "重選種類" : "選擇種類"}
            onPress={onSelectCatClick}
        />
        {selectedCatIds.length > 0 
            && <Text>已選種類：{selectedCat_str}</Text>}

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