import React from 'react';
import { View, Text } from 'react-native';
import { DefaultModal } from "./CommonUI";
import { 
    ContinueOrReset, 
    WordThenPhoto, 
    KeywordOrKill, 
    NextRoundWord,
    ConfirmReset
} from './Widgets';

const Modal = ({
    setGlobalState,
    globalState,
    dismissModal,
}) => {
    const {
        modalContent,
        modalVisible,
        modalPlayerId,
        players,
    } = globalState;

    const _renderModalContent = () => {
        if (!modalVisible) {
            return
        }
        
        let widgets = {
            "nothing": <View/>,
        };

        if (modalPlayerId === null) {
            widgets = {
                ...widgets,
                "continueOrReset": <ContinueOrReset
                    setGlobalState={setGlobalState}
                    globalState={globalState}
                    dismissModal={dismissModal}
                />,
                "confirmReset": <ConfirmReset
                    setGlobalState={setGlobalState}
                    globalState={globalState}
                    dismissModal={dismissModal}
                />  
            }
        } else {
            const player = players.filter(p => p.id === modalPlayerId)[0];
            widgets = {
                ...widgets,
                "wordThenPhoto": <WordThenPhoto
                    globalState={globalState}
                    setGlobalState={setGlobalState}
                    dismissModal={dismissModal}
                    player={player}
                />,
                "keywordOrKill": <KeywordOrKill
                    globalState={globalState}
                    setGlobalState={setGlobalState}
                    dismissModal={dismissModal}
                    player={player}
                />,
                "nextRoundWord": <NextRoundWord
                    globalState={globalState}
                    setGlobalState={setGlobalState}
                    dismissModal={dismissModal}
                    word={player.word}
                />,
                "nothing": <View/>
            }
        }

        const body = widgets[modalContent];

        if (typeof body === 'undefined') {
            return (
                <Text style={{fontSize: 24}}>
                    "{modalContent}" is not a valid state for "modalContent": 
                    enum({`${JSON.stringify(Object.keys(widgets))}`})
                    for modalPlayerId is {modalPlayerId !== null && "not"} null
                </Text>
            )
        }

        return body
    }
    
    return (
        <DefaultModal
            children={_renderModalContent()}
            modalVisible={modalVisible} 
            onBackdropPress={dismissModal}                    
        />
    )
};

export default Modal;