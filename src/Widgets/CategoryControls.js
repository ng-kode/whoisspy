import React from 'react';
import { View, Text } from 'react-native';
import { DefaultButton } from "../CommonUI";

const CategoryControls = ({ 
    setGlobalState,
    globalState,
}) => {
    const {
        tmpCatIds,
    } = globalState;

    onOkayPress = () => {
        setGlobalState({
            header: "landing",
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
            header: "landing",
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