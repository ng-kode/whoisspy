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
        return (
            <View style={styles.container}>
                <Header 
                    style={styles.headerContainer}
                    title={JSON.stringify(this.state.result)} 
                />

                <Core
                    style={styles.coreContainer}
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    globalState={this.state}
                />                                    

                <Footer
                    style={styles.footerContainer}
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    globalState={this.state}
                />

                <Modal
                    setGlobalState={(obj, cb) => this.setStateByChild(obj, cb)}
                    globalState={this.state}
                    dismissModal={this.dismissModal}                    
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
    },
    headerContainer: {
        borderWidth: 1,
        borderColor: "steelblue",
        backgroundColor: "lightblue",
        flex: 0.9,
        width: "100%",
    },
    coreContainer: {
        borderWidth: 1,
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        flex: 4.8,
        width: "100%",
    },
    footerContainer: {
        borderWidth: 1,
        backgroundColor: "palevioletred",
        flex: 1,
        width: "100%",
    },
})

export default WhoIsSpy;

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}