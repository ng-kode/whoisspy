import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'
import Header from "./Header";
import Core from "./Core";
import Footer from "./Footer";
import Modal from "./Modal";
import { 
    RoundSettings, 
    CategoryTiles, 
    LandingNextBtn,
    CategoryControls,
    PlayerTiles,
    PlayerTilesControls,
    WordThenPhoto,
    GuessControls,
    KeywordOrKill,
    SharePenaltyControls,
    ContinueControls,
    ContinueOrReset,
    NextRoundWord,
} from "./Widgets";

export const DEFAULT_AVATAR = ""

class WhoIsSpy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core: "rs",
            footer: "nothing",
            modalContent: "nothing",
            selectedCatIds: [],
            tmpCatIds: [],
            numPlayers: 6,
            numSpies:  2,
            players: [],
            showGuess: false,
            modalVisible: false,
            modalPlayerId: null,
            roundNum: 0,
            result: {},
            showPenalty: false,
        }

        this.wordArr = [];
    }
    
    dismissModal = () => {
        this.setState({
            modalVisible: false,
            modalPlayerId: null,
        })
    }

    setStateByChild = (obj, cb) => {
        if (cb) {
            this.setState(obj, () => cb(this.state));
        } else {
            this.setState(obj);
        }
    }

    render() {
        const {
            core,
            numSpies,
            numPlayers,
            selectedCatIds,
            tmpCatIds,
            players,
            showPenalty,
            result,
            footer,
            showGuess,
            modalContent,
            modalVisible,
            modalPlayerId,
            roundNum
        } = this.state

        return (
            <View style={styles.container}>
                <Header title={
                    JSON.stringify(this.state.result)
                } />

                <Core
                    body={core}
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    numSpies={numSpies}
                    numPlayers={numPlayers}
                    selectedCatIds={selectedCatIds}
                    tmpCatIds={tmpCatIds}
                    players={players}
                    showPenalty={showPenalty}
                    result={result}
                />                                    

                <Footer
                    body={footer}
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    showGuess={showGuess}
                    tmpCatIds={tmpCatIds}
                    selectedCatIds={selectedCatIds}
                    numPlayers={numPlayers}
                    numSpies={numSpies}
                />

                <Modal
                    body={modalContent}
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    modalVisible={modalVisible}
                    dismissModal={this.dismissModal}
                    modalPlayerId={modalPlayerId}
                    players={players}
                    numSpies={numSpies}
                    numPlayers={numPlayers}
                    roundNum={roundNum}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
    }
})

export default WhoIsSpy;

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}