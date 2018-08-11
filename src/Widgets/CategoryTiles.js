import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const Tile = ({ name, isLastTile, onPress }) => (
    <TouchableOpacity 
        style={[styles.tileContainer, isLastTile && styles.lastTile]}
        onPress={onPress}
    >
        <Text>{name}</Text>
    </TouchableOpacity>
)

class CategoryTiles extends Component {
    state = {
        selectedIds: this.props.getSelectedCatIds()
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
                <Tile
                    name={this.state.selectedIds}
                />
                {cats.map((cat, i) => 
                    <Tile 
                        key={cat.name}
                        name={cat.name} 
                        isLastTile={i === cats.length - 1}
                        onPress={() => this.onCatTilePress(cat.id)}
                    />
                )}
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
