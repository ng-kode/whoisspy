import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

class WordThenPhoto extends Component {
    state = {
        showCamera: false,
    }

    onBtnPress = async () => {
        if (this.state.showCamera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.props.onPhotoPathRetrieved(data.uri);
        } else {
            this.setState({ showCamera: true })
        }
    }

    render() {
        const {
            word
        } = this.props;

        const {
            showCamera,
        } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Text>請記下字詞</Text>
                
                {showCamera 
                    ? (
                        <View style={{ flex: 1 }}>
                           <RNCamera
                                ref={ref => {
                                    this.camera = ref;
                                }}
                                style = {{ flex: 1 }}
                                type={RNCamera.Constants.Type.front}
                                permissionDialogTitle={'Permission to use camera'}
                                permissionDialogMessage={'We need your permission to use your camera phone'}
                            />
                        </View>
                    )
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