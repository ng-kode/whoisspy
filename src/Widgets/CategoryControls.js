import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const CategoryControls = ({ 
    setGlobalState,
    tmpCatIds,
    selectedCatIds,
}) => {
    onOkayPress = () => {
        setGlobalState({
            core: "rs",            
            selectedCatIds: tmpCatIds,
            tmpCatIds: [],
        }, (newState) => {
            setGlobalState({
                footer: newState.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    onCancelPress = () => {
        setGlobalState({
            core: "rs",
            footer: "landingNextBtn",
            tmpCatIds: [],
        }, (newState) => {
            setGlobalState({
                footer: newState.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    return (
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
    )
};

export default CategoryControls;