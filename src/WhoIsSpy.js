import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'
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
            core: "rs",
            footer: "nothing",
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
    _renderCore = () => {
        const widgets = {
            "rs": <RoundSettings
                numSpies={this.state.numSpies}
                numPlayers={this.state.numPlayers}
                setNumSpies={(sign) => this.setNumSpies(sign)}
                setNumPlayers={val => this.setNumPlayers(val)}
                onSelectCatClick={this.switchToCat} 
            />,
            "cat": <CategoryTiles 
                ref={node => this.catTilesNode = node} 
                selectedCatIds={this.state.selectedCatIds}
            />,
            "playerTiles": <PlayerTiles
                players={this.state.players}
                onPress={() => console.warn('Player Press')}
            />
        }

        if (typeof widgets[this.state.core] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "core": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        return widgets[this.state.core]
    }
    
    /************************************************************
     *                        Footer
     ************************************************************/
    _renderFooter = () => {
        const widgets = {
            "landingNextBtn": <LandingNextBtn
                onPress={this.onLandingNextClick}
            />,
            "categoryControls": <CategoryControls
                onOkayPress={this.onConfirmCatClick}
                onCancelPress={this.onCancelCatClick}
            />,
            "playerTilesControls": <Text>To be done</Text>,
            "nothing": <View/>
        }

        if (typeof widgets[this.state.footer] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "core": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        return widgets[this.state.footer]
    }

    /************************************************************
     *                        Handlers
     ************************************************************/
    switchToCat = () => {
        this.setState({ 
            core: "cat",
            footer: "categoryControls",
         })
    }

    onConfirmCatClick = () => {
        this.setState({
            core: "rs",            
            selectedCatIds: this.catTilesNode.getSelectedIds()
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    onCancelCatClick = () => {
        this.setState({
            core: "rs",
            footer: "landingNextBtn",
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    setNumSpies = sign => {
        // TODO: Toast for invalid values
        this.setState({ numSpies: this.state.numSpies + parseInt(sign + 1) });
    }

    setNumPlayers = numPlayers => {
        this.setState({ numPlayers });
    }

    onLandingNextClick = () => {
        const { numPlayers, numSpies } = this.state;
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
            players,
        }, () => {
            this.setState({
                core: "playerTiles",
                footer: "playerTilesControls",
            });
        });
    }

    /************************************************************
     *                        Render
     ************************************************************/
    render() {
        return (
            <View style={styles.container}>
                <Header title={
                    JSON.stringify(this.state.players)
                } />
                <Core>
                    {this._renderCore()}
                </Core>
                <Footer>
                    {this._renderFooter()}
                </Footer>
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