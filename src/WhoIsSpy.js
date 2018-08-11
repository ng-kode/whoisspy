import React, { Component } from "react";
import { View, StyleSheet } from 'react-native'
import Header from "./Header";
import Core from "./Core";
import Footer from "./Footer";
import { 
    RoundSettings, 
    CategoryTiles, 
    LandingNextBtn,
    CategoryControls,
    PlayerTiles,
} from "./Widgets";
class WhoIsSpy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core: this.rs,
            footer: <View/>,
            selectedCatIds: [],
            numPlayers: 6,
            numSpies:  2,
            players: [],
        }
    }

    /************************************************************
     *                        Header
     ************************************************************/
    headStuff = "TO BE DONE"


    /************************************************************
     *                        Core
     ************************************************************/
    rs = (
        <RoundSettings
            ref={node => this.roundSettingsNode = node}
            getNumPlayers={() => this.state.numPlayers}
            getNumSpies={() => this.state.numSpies}
            onSelectCatClick={() => this.switchToCat()} 
        />
    )

    catTiles = (
        <CategoryTiles 
            ref={node => this.catTilesNode = node} 
            getSelectedCatIds={() => this.state.selectedCatIds}
        />
    )

    playerTiles = (
        <PlayerTiles
            getPlayers={() => this.state.players}
            onPress={() => console.warn('Player Press')}
        />
    )
    
    /************************************************************
     *                        Footer
     ************************************************************/
    landingNextBtn = (
        <LandingNextBtn
            onPress={() => this.onLandingNextClick()}
        />
    )

    categoryControls = (
        <CategoryControls
            onOkayPress={() => this.onConfirmCatClick()}
            onCancelPress={() => this.onCancelCatClick()}
        />
    )

    /************************************************************
     *                        Handlers
     ************************************************************/
    switchToCat = () => {
        this.setState({ 
            core: this.catTiles,
            footer: this.categoryControls,
         })
    }

    onConfirmCatClick = () => {
        this.setState({
            core: this.rs,            
            selectedCatIds: this.catTilesNode.getSelectedIds()
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? this.landingNextBtn
                    : <View/>,
            })
        })
    }

    onCancelCatClick = () => {
        this.setState({
            core: this.rs,
            footer: this.landingNextBtn,
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? this.landingNextBtn
                    : <View/>,
            })
        })
    }

    onLandingNextClick = () => {
        const { numPlayers, numSpies } = this.roundSettingsNode.getPlayersConfig();
        let players = Array(numPlayers).fill().map(_ => {
            return {
                role: 'c',
                word: '字字字字',
                alive: true,
                photoPath: '',
            }
        });

        while (players.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            players[spyIdx].role = 's';
        };

        players = shuffle(players);
        players = players.map((p, i) => ({ ...p, name: `Player ${i}` }));

        this.setState({
            numPlayers,
            numSpies,
            players,
        }, () => {
            this.setState({
                core: this.playerTiles,
                footer: this.playerTilesControls,
            });
        });
    }

    /************************************************************
     *                        Render
     ************************************************************/
    render() {
        const {
            core,
            footer,
        } = this.state;

        return (
            <View style={styles.container}>
                <Header title={
                    JSON.stringify(this.state.players)
                } />
                <Core body={core} />
                <Footer body={footer} />
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

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}