import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DEFAULT_AVATAR } from '../WhoIsSpy';

const PlayerTiles = ({ 
    globalState,
    setGlobalState,
}) => {
    const {
        players,
        showPenalty, 
        result,
        onPlayerTilePress,
    } = globalState;

    const onPress = (id, alive) => {
        if (!alive) {
            return;
        }

        if (result.winner) {
            return;
        }

        setGlobalState({ 
            modalVisible: true,
            modalPlayerId: id,
            modalContent: onPlayerTilePress,
        });
    }

    return (
    <View style={styles.tilesWrapper}>
        {players.map(player =>
            <TouchableOpacity
                key={JSON.stringify(player)}
                style={[
                    styles.tileContainer, 
                    !player.alive && { backgroundColor: "grey" },
                    (showPenalty && player.role !== result.winner) && { backgroundColor: "red" }
                ]}
                onPress={() => onPress(player.id, player.alive)}
            >
                <Text>{player.name}</Text>
                {player.photoPath !== DEFAULT_AVATAR && <Image
                    style={{width: 50, height: 50}}
                    source={player.photoPath}
                />}
            </TouchableOpacity>
        )}
    </View>
)};

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