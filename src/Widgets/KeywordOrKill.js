import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


class KeywordOrKill extends Component {
    state = {
        showWord: false,
        showKillConfirm: false,
    }

    render() {
        const {
            dismissModal,
            word,
            onKillPress,
            photoPath,
        } = this.props;

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
                            onPress={onKillPress}
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