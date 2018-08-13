import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { DefaultButton } from "./CommonUI";
import { 
    LandingNextBtn,
    CategoryControls,
    PlayerTilesControls,
    SharePenaltyControls,
    GuessControls,
    ContinueControls
} from "./Widgets";

const Footer = ({ 
    body,
    setGlobalState,
    showGuess,
    tmpCatIds,
    selectedCatIds,
    numPlayers,
    numSpies,
 }) => {


    const _renderFooter = () => {
        // available widgets
        const widgets = {
            "landingNextBtn": <LandingNextBtn
                setGlobalState={setGlobalState}
                numPlayers={numPlayers}
                numSpies={numSpies}
            />,
            "categoryControls": <CategoryControls
                setGlobalState={setGlobalState}
                tmpCatIds={tmpCatIds}
                selectedCatIds={selectedCatIds}
            />,
            "playerTilesControls": <PlayerTilesControls
                showGuess={showGuess}
                setGlobalState={setGlobalState}
            />,
            "guessControls": <GuessControls/>,
            "sharePenaltyControls": <SharePenaltyControls
                setGlobalState={setGlobalState}
            />,
            "continueControls": <ContinueControls
                setGlobalState={setGlobalState}
            />,
            "nothing": <View/>
        }

        // Error handling
        if (typeof widgets[body] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "footer": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        // return widget by state
        return widgets[body]
    }

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                {_renderFooter()}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: "palevioletred",
        flex: 1,
        width: "100%",
    },
})

export default Footer;