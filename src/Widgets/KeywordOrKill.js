import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


class KeywordOrKill extends Component {
    state = {
        showWord: false,
        showKillConfirm: false,
    }

    onKillPress = () => {
        const {
            globalState,
            setGlobalState,
            dismissModal,
        } = this.props;

        const {
            players,
            modalPlayerId,
        } = globalState;

        players[modalPlayerId] = {
            ...players[modalPlayerId],
            alive: false,            
        }

        const aliveSpies = players.filter(p => p.role === 's' && p.alive).length;
        const aliveNorm = players.filter(p => p.role === 'c' && p.alive).length;
        console.log("aliveSpies", aliveSpies);
        console.log("aliveNorm", aliveNorm);
        
        const spyWin = aliveSpies === aliveNorm;
        const normWin = aliveSpies === 0;

        if (spyWin) {
            setGlobalState({
                result : {
                    winner: 's',
                    aliveSpies,
                    aliveNorm
                },
                footer: "shareControls",
            })
        } else if (normWin) {
            setGlobalState({
                result : {
                    winner: 'c',
                    aliveSpies,
                    aliveNorm
                },
                footer: "shareControls",
            })
        } else {
            setGlobalState({
                result : {
                    aliveSpies,
                    aliveNorm
                }
            })
        }

        dismissModal();
    }

    render() {
        const {
            dismissModal,
            player,
        } = this.props;

        const {
            word,
            photoPath,
        } = player;

        const {
            showWord,
            showKillConfirm
        } = this.state;

        return(
            <View>                
                {(!showWord && !showKillConfirm) && (
                    <View>
                        <Text>KeywordOrKill</Text>
                        <Button
                            title="忘詞"
                            onPress={() => this.setState({ showWord: true })}
                        />
                        <Button
                            title="殺人"
                            onPress={() => this.setState({ showKillConfirm: true })}
                        />
                    </View>
                )}
                
                {showWord && (
                    <View>
                        <Text>{word}</Text>
                        <Button
                            title="OK"
                            onPress={dismissModal}
                        />
                    </View>
                )}

                {showKillConfirm && (
                    <View>
                        <Text>確定殺臥底？</Text>
                        <Image
                            style={{width: 50, height: 50}}
                            source={photoPath}
                        />
                        <Button
                            title="OK"
                            onPress={this.onKillPress}
                        />
                        <Button
                            title="CANCEL"
                            onPress={dismissModal}
                        />
                    </View>
                )}
            </View>
        );
    }
}



export default KeywordOrKill;