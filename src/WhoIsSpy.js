import React, { Component } from "react";
import { View, StyleSheet } from 'react-native'
import Header from "./Header";
import Core from "./Core";
import Footer from "./Footer";

class WhoIsSpy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Core/>
                <Footer/>
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