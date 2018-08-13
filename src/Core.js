import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundSettings, CategoryTiles, PlayerTiles } from "./Widgets";

const Core = ({ 
    body,
    setGlobalState,
    numSpies,
    numPlayers,
    selectedCatIds,
    tmpCatIds,
    players,
    showPenalty,
    result,
}) => {
    const onTilePress = id => {
        if (result.winner) {
            return;
        }

        setGlobalState({ 
            modalVisible: true,
            modalPlayerId: id,
        });
    }

    const _renderBody = () => {
        // available widgets
        const widgets = {
            "rs": <RoundSettings
                setGlobalState={setGlobalState}
                numSpies={numSpies}
                numPlayers={numPlayers}
                selectedCatIds={selectedCatIds}                
            />,
            "cat": <CategoryTiles
                setGlobalState={setGlobalState}
                tmpCatIds={tmpCatIds}
            />,
            "playerTiles": <PlayerTiles
                players={players}
                onTilePress={onTilePress}
                showPenalty={showPenalty}
                result={result}
            />
        }

        // Error handling
        if (typeof widgets[body] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "core": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        // return widget by state
        return widgets[body]
    }

    return (
        <View style={styles.container}>
            {_renderBody()}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        flex: 4.8,
        width: "100%",
    },
})

export default Core;