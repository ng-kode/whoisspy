import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CATEGORY from "../data/CATEGORY.json";

const CategoryTiles = ({
    setGlobalState,
    globalState,
}) => {
    const {
        tmpCatIds,
    } = globalState;

    const onCatTilePress = id => {
        setGlobalState({
            "tmpCatIds": tmpCatIds.includes(id)
                ? tmpCatIds.filter(catid => catid !== id)
                : tmpCatIds.concat(id)
        });
    }

    const onAllPress = () => {
        const allIds = CATEGORY.map(cat => cat.id);
        setGlobalState({
            "tmpCatIds": tmpCatIds.length === allIds.length
                ? []
                : allIds
        });
    }
    
    return (
        <View style={styles.tilesWrapper}>
            {CATEGORY.map((cat, i) => 
                <TouchableOpacity 
                    key={cat.text}
                    style={[
                        styles.tileContainer,
                        tmpCatIds.includes(cat.id) && styles.selected
                    ]}
                    onPress={() => onCatTilePress(cat.id)}
                >
                    <Text>{cat.text}</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity 
                key="allthecat"
                style={[
                    styles.tileContainer, 
                    styles.lastTile,
                    tmpCatIds.length === CATEGORY.length && styles.selected
                ]}
                onPress={onAllPress}
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
    },
    selected: {
        backgroundColor: "yellowgreen",
    }
})

export default CategoryTiles;
