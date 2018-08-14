import React, { Component } from "react";
import { View, Text } from 'react-native';

const Header = ({
    style,
    globalState,
    setGlobalState,
}) => {
    const {
        header,
        result,
        roundNum,
    } = globalState;

    const _renderBody = () => {
        const widgets = {
            "landing": <Text>
                誰是臥底
            </Text>,
            "selectCat": <Text>
                選擇字詞種類
            </Text>,
            "takePhoto": <Text>
                一人點擊一張卡牌
            </Text>,
            "nowKilling": <Text>
                { result.winner 
                    ? `${result.winner}贏了！` 
                    : "輪流描述自己的字詞 -> 選個臥底 -> 按卡殺他/她" 
                }
            </Text>,
            "penalty": <Text>
                這些玩家要接受懲罰了😈
            </Text>,
            "beforeNextRound": <Text>
                第{roundNum + 1}回合
            </Text>,
            "nothing": <View/>,
        }

        const body = widgets[header];

        if (typeof body === 'undefined') {
            return (
                <Text style={{fontSize: 24}}>
                    "{header}" is not a valid state for "header": 
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

export default Header;