import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundSettings, CategoryTiles, PlayerTiles } from "./Widgets";

const Core = ({
    setGlobalState,
    globalState,
}) => {
    const {
        core,
    } = globalState;

    const _renderBody = () => {
        const widgets = {
            "rs": <RoundSettings
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "cat": <CategoryTiles
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "playerTiles": <PlayerTiles
                setGlobalState={setGlobalState}
                globalState={globalState}
            />
        }

        const body = widgets[core];

        if (typeof body === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "core": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        return body;
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