import React from 'react';
import { View } from 'react-native';
import { RoundSettings, CategoryTiles, PlayerTiles } from "./Widgets";

const Core = ({
    style,
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
            return (
                <Text style={{fontSize: 24}}>
                    "{core}" is not a valid state for "core": 
                    enum({`${JSON.stringify(Object.keys(widgets))}`})
                </Text>
            )
        }

        return body;
    }

    return (
        <View style={style}>
            {_renderBody()}
        </View>
    )
};

export default Core;