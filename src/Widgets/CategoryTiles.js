import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CATEGORY from "../data/CATEGORY.json";

const cats = [
    {
        id: 1000,
        name: 'cat 0'
    },
    {
        id: 2000,
        name: 'cat 1'
    },
    {
        id: 3000,
        name: 'cat 2'
    },
    {
        id: 4000,
        name: 'cat 3'
    },
    {
        id: 5000,
        name: 'cat 4'
    },
]

class CategoryTiles extends Component {
    state = {
        selectedIds: this.props.selectedCatIds
    }

    getSelectedIds = () => this.state.selectedIds;

    onCatTilePress = id => {
        const {
            selectedIds
        } = this.state;

        this.setState({
            selectedIds: selectedIds.includes(id)
                ? selectedIds.filter(catid => catid !== id)
                : selectedIds.concat(id)
        });
    }    

    render() {
        return (
            <View style={styles.tilesWrapper}>
                {CATEGORY.map((cat, i) => 
                    <TouchableOpacity 
                        key={cat.text}
                        style={styles.tileContainer}
                        onPress={() => this.onCatTilePress(cat.id)}
                    >
                        <Text>{cat.text}</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity 
                    key="allthecat"
                    style={[styles.tileContainer, styles.lastTile]}
                    onPress={() => {}}
                >
                    <Text>✌️全部✌️</Text>
                </TouchableOpacity>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    tilesWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "space-around",
    },
    tileContainer: {
        backgroundColor: "gold",
        width: "45%",
        height: "27%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    lastTile: {
        width: "90%"
    }
})

export default CategoryTiles;
