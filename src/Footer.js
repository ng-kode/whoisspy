import React, { Component } from "react";
import { View } from 'react-native';
import { DefaultButton } from "./CommonUI";
import { 
    LandingNextBtn,
    CategoryControls,
    BeforeGuessControls,
    ShareControls,
    GuessControls,
    RoundCompleteControls
} from "./Widgets";

const Footer = ({
    style,
    setGlobalState,
    globalState,
 }) => {
    const {
        footer,
    } = globalState;

    const _renderFooter = () => {
        const widgets = {
            "landingNextBtn": <LandingNextBtn
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "categoryControls": <CategoryControls
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "beforeGuessControls": <BeforeGuessControls
                globalState={globalState}
                setGlobalState={setGlobalState}
            />,
            "guessControls": <GuessControls/>,
            "shareControls": <ShareControls
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "roundCompleteControls": <RoundCompleteControls
                setGlobalState={setGlobalState}
                globalState={globalState}
            />,
            "nothing": <View/>
        }

        const body = widgets[footer];
        
        if (typeof body === 'undefined') {
            return (
                <Text style={{fontSize: 24}}>
                    "{footer}" is not a valid state for "footer": 
                    enum({`${JSON.stringify(Object.keys(widgets))}`})
                </Text>
            )
        }

        return body;
    }

    return (
        <View style={style}>
            {_renderFooter()}
        </View>
    )
};

export default Footer;