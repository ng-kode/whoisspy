import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NowKillingHeader = ({
    globalState,
    setGlobalState,
}) => {
    const {
        result,
        roundNum,
        wordArr,
        players,
        numSpies,
        numPlayers,
    } = globalState;

    let msg;
    if (result.winner) {
        const winners = {
            s: '臥底',
            c: '平民',
        }

        msg = `${winners[result.winner]}贏了！\n`
            + `臥底字：${wordArr[roundNum]['s']}\n`
            + `平民字：${wordArr[roundNum]['c']}`;
    } else {
        aliveSpies = players.filter(p => p.alive && p.role === 's').length;
        aliveNorm = players.filter(p => p.alive && p.role === 'c').length;

        msg = "輪流描述自己的字詞 -> 選個臥底 -> 按卡殺他/她\n"
            + `臥底人數：${aliveSpies} / ${numSpies}\n`
            + `平民人數：${aliveNorm} / ${numPlayers - numSpies}`;
    }

    return (
        <View>
            <Text>
                {msg}
            </Text>
        </View>
    );
}

export default NowKillingHeader;