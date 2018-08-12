import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlayerTiles = ({ players, onTilePress }) => (
    <View style={styles.tilesWrapper}>
        {players.map(player =>
            <TouchableOpacity
                key={JSON.stringify(player)}
                style={styles.tileContainer}
                onPress={() => onTilePress(player.id)}
            >
                <Text>{player.name}</Text>
            </TouchableOpacity>
        )}
    </View>
);

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
        width: "25%",
        height: "25%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default PlayerTiles;