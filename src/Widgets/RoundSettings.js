import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { DefaultButton, FloatingButton } from '../CommonUI';

class RoundSettings extends Component {
    state = {
        numPlayers: this.props.getNumPlayers(),
        numSpies:  this.props.getNumSpies(),
    }

    getPlayersConfig = () => this.state;
    
    setNumPlayers = numPlayers =>
        this.setState({ numPlayers });

    setNumSpies = sign =>
        this.setState({ numSpies: this.state.numSpies + parseInt(sign + 1) });

    render() {
        const {
            onSelectCatClick
        } = this.props;

        return (
            <View>
                <DefaultButton
                    title="選擇種類"
                    onPress={onSelectCatClick}
                />
        
                <Text>遊玩人數</Text>
                <Slider
                    maximumValue={10}
                    minimumValue={4}
                    value={6}
                    step={1}
                    onValueChange={this.setNumPlayers}
                />
        
                <View style={styles.numSpyContainer}>
                    <Text>臥底人數: {6}</Text>
                    <FloatingButton
                        title="+"
                        onPress={() => this.setNumSpies("+")}
                    />
                    <FloatingButton
                        title="-"
                        onPress={() => this.setNumSpies("-")}
                    />
                </View>

                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        );
    }
} 


const styles = StyleSheet.create({
    numSpyContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default RoundSettings;