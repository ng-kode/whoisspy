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

        this.setState({
            numPlayers,
            numSpies,
        })
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
                    JSON.stringify(this.state.selectedCatIds) + '\n' +
                    JSON.stringify(this.state.numPlayers) + '\n' +
                    JSON.stringify(this.state.numSpies)
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