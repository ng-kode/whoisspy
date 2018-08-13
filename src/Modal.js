import React from 'react';
import { View, Text } from 'react-native';
import { DefaultModal } from "./CommonUI";
import { ContinueOrReset, WordThenPhoto, KeywordOrKill, NextRoundWord } from './Widgets';

const Modal = ({
    body,
    setGlobalState,
    modalVisible,
    dismissModal,
    modalPlayerId,
    players,
    numSpies,
    numPlayers,
    roundNum,
}) => {
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
                    players={players}
                    numSpies={numSpies}
                    numPlayers={numPlayers}
                    roundNum={roundNum}
                    dismissModal={dismissModal}
                />        
            }
        } else {
            const player = players.filter(p => p.id === modalPlayerId)[0];
            widgets = {
                ...widgets,
                "wordThenPhoto": <WordThenPhoto
                    player={player}
                    players={players}
                    modalPlayerId={modalPlayerId}
                    dismissModal={dismissModal}
                    setGlobalState={setGlobalState}
                />,
                "keywordOrKill": <KeywordOrKill
                    player={player}
                    players={players}
                    modalPlayerId={modalPlayerId}
                    dismissModal={dismissModal}                    
                    setGlobalState={setGlobalState}
                />,
                "continueOrReset": <ContinueOrReset
                    players={players}
                    numSpies={numSpies}
                    numPlayers={numPlayers}
                    roundNum={roundNum}
                    dismissModal={dismissModal}
                    setGlobalState={setGlobalState}
                />,
                "nextRoundWord": <NextRoundWord
                    word={player.word}
                    setGlobalState={setGlobalState}
                    players={players}
                    modalPlayerId={modalPlayerId}
                    dismissModal={dismissModal}
                />,
                "nothing": <View/>
            }
        }

        // Error handling
        if (typeof widgets[body] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "modalContent": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
                for modalPlayerId is {modalPlayerId !== null && "not"} null
            </Text>
        }

        // return widget by state
        return widgets[body]
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