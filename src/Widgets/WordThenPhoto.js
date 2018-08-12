import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { DEFAULT_AVATAR } from '../WhoIsSpy';

class WordThenPhoto extends Component {
    state = {
        showCamera: false,
        isRetake: this.props.photoPath !== DEFAULT_AVATAR,
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
            word,
            photoPath,
            dismissModal,
        } = this.props;

        const {
            showCamera,
            isRetake,
        } = this.state;    

        return (
            <View style={{ flex: 1 }}>
                <Text>請記下字詞</Text>

                {!showCamera && (
                    <View>
                        <Text>{word}</Text>
                        <Button
                            title="已記下"
                            onPress={this.onBtnPress}
                        />
                    </View>
                )}
                
                {(showCamera && !isRetake)
                    && (
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
                            
                            <Button
                                title="拍照"
                                onPress={this.onBtnPress}
                            />
                        </View>
                    )
                }

                {(showCamera && isRetake)
                    && (
                        <View>
                            <Text>Retake photo ?</Text>
                            <Image
                                style={{width: 50, height: 50}}
                                source={photoPath}
                            />
                            <Button
                                title="YES"
                                onPress={() => this.setState({ showCamera: true, isRetake: false })}
                            />
                            <Button
                                title="NO"
                                onPress={dismissModal}
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}

export default WordThenPhoto;