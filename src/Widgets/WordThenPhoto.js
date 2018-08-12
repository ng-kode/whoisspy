import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class WordThenPhoto extends Component {
    state = {
        showCamera: false
    }

    onBtnPress = () => {
        if (this.state.showCamera) {
            // TODO: async takePhoto
            this.props.dismissModal()
        } else {
            this.setState({ showCamera: true })
        }
    }

    render() {
        const {
            word
        } = this.props;

        const {
            showCamera
        } = this.state;

        return (
            <View>                
                <Text>請記下字詞</Text>
                
                {showCamera 
                    ? <Text>Camera will be here</Text>
                    : <Text>{word}</Text>
                }

                <Button
                    title={showCamera ? "拍照" : "已記下"}
                    onPress={this.onBtnPress}
                />
            </View>
        );
    }
} 

export default WordThenPhoto;