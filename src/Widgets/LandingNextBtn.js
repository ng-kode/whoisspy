import React from 'react';
import { DefaultButton } from '../CommonUI';
import { DEFAULT_AVATAR, getRandomInt } from '../WhoIsSpy';

const LandingNextBtn = ({
    setGlobalState,
    globalState,
}) => {
    const {
        numPlayers, 
        numSpies
    } = globalState;

    const onPress = () => {
        let players = Array(numPlayers).fill().map((_, i) => {
            return {
                role: 'c',
                id: i,
                name: `Player ${i + 1}`,
                word: `字字字${i}`,
                alive: true,
                photoPath: DEFAULT_AVATAR,
                wordSeen: false,
            }
        });

        while (players.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            players[spyIdx].role = 's';
        };

        setGlobalState({
            players,
        }, (newState) => {
            setGlobalState({
                core: "playerTiles",
                footer: "playerTilesControls",
                modalContent: "wordThenPhoto"
            });
        });
    } 

    return(
        <DefaultButton
            title="GO"
            onPress={onPress}
        />
    );
}

export default LandingNextBtn;