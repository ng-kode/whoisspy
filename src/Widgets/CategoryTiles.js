import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CATEGORY from "../data/CATEGORY.json";

const CategoryTiles = ({
    setGlobalState,
    tmpCatIds,
}) => {
    const onCatTilePress = id => {
        setGlobalState({
            "tmpCatIds": tmpCatIds.includes(id)
                ? tmpCatIds.filter(catid => catid !== id)
                : tmpCatIds.concat(id)
        });
    }    
    
    return (
        <View style={styles.tilesWrapper}>
            {CATEGORY.map((cat, i) => 
                <TouchableOpacity 
                    key={cat.text}
                    style={styles.tileContainer}
                    onPress={() => onCatTilePress(cat.id)}
                >
                    <Text>{cat.text}</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity 
                key="allthecat"
                style={[styles.tileContainer, styles.lastTile]}
                onPress={() => {}}
            >
                <Text>✌️全部✌️ {JSON.stringify(tmpCatIds)}</Text>
            </TouchableOpacity>
        </View>
    );
    
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
