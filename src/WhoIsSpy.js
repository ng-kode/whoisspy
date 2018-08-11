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
        }
    }

    // header

    // core
    rs = <RoundSettings onSelectCatClick={() => this.switchToCat()} />
    catTiles = (
        <CategoryTiles 
            ref={node => this.catTilesNode = node} 
            getSelectedCatIds={() => this.state.selectedCatIds}
        />
    )
    
    // footer
    landingNextBtn = <LandingNextBtn/>
    categoryControls = (
        <CategoryControls
            onOkayPress={() => this.onConfirmCatClick()}
            onCancelPress={() => this.onCancelCatClick()}
        />
    )

    // handlers
    switchToCat = () => {
        this.setState({ 
            core: this.catTiles,
            footer: this.categoryControls,
         })
    }

    onConfirmCatClick = () => {
        this.setState({
            core: this.rs,
            footer: this.landingNextBtn,
            selectedCatIds: this.catTilesNode.getSelectedIds()
        })
    }

    onCancelCatClick = () => {
        this.setState({
            core: this.rs,
            footer: this.landingNextBtn,
        })
    }

    // render
    render() {
        const {
            core,
            footer,
        } = this.state;

        return (
            <View style={styles.container}>
                <Header body={JSON.stringify(this.state.selectedCatIds)} />
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