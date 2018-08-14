import React from 'react';
import { DefaultButton } from '../CommonUI';
import { DEFAULT_AVATAR, getRandomInt } from '../WhoIsSpy';
import CAT_GROUPS from "../data/CAT_GROUPS.json";
import GROUP_WORDS from "../data/GROUP_WORDS.json";

const LandingNextBtn = ({
    setGlobalState,
    globalState,
}) => {
    const {
        numPlayers, 
        numSpies,
        selectedCatIds
    } = globalState;

    const onPress = () => {
        let selectedGroupIds = [];

        CAT_GROUPS.filter(obj =>
            selectedCatIds.includes(obj.categoryid)
        ).forEach(obj => {
            obj.groups.forEach(id => selectedGroupIds.push(id))
        });

        selectedGroupIds = shuffle(selectedGroupIds);

        const wordArr = shuffle(GROUP_WORDS
            .filter(group => selectedGroupIds.includes(group.groupid)))
            .map(group => {
                const keywords = shuffle(group.keywords).slice(0, 2)
                return { s: keywords[0].word, c: keywords[1].word }
            });
        console.log(wordArr);

        let players = Array(numPlayers).fill().map((_, i) => {
            return {
                role: 'c',
                id: i,
                name: `Player ${i + 1}`,
                word: wordArr[0]['c'],
                alive: true,
                photoPath: DEFAULT_AVATAR,
                wordSeen: false,
            }
        });

        while (players.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            players[spyIdx].role = 's';
            players[spyIdx].word = wordArr[0]['s']
        };

        setGlobalState({
            players,
            wordArr
        }, (newState) => {
            setGlobalState({
                header: "takePhoto",
                core: "playerTiles",
                footer: "beforeGuessControls",
                onPlayerTilePress: "wordThenPhoto"
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

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  