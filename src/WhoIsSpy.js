import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'
import Header from "./Header";
import Core from "./Core";
import Footer from "./Footer";
import { 
    RoundSettings, 
    CategoryTiles, 
    LandingNextBtn,
    CategoryControls,
    PlayerTiles,
    PlayerTilesControls,
    WordThenPhoto,
    GuessControls,
    KeywordOrKill,
    SharePenaltyControls,
    ContinueControls,
    ContinueOrReset,
    NextRoundWord,
} from "./Widgets";
import { DefaultModal } from "./CommonUI";

export const DEFAULT_AVATAR = ""

class WhoIsSpy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            core: "rs",
            footer: "nothing",
            modalContent: "nothing",
            selectedCatIds: [],
            numPlayers: 6,
            numSpies:  2,
            players: [],
            showGuess: false,
            modalVisible: false,
            modalPlayerId: null,
            roundNum: 0,
            result: {},
            showPenalty: false,
        }

        this.wordArr = [];
    }

    /************************************************************
     *                        Header
     ************************************************************/
    headStuff = "TO BE DONE"


    /************************************************************
     *                        Core
     ************************************************************/
    _renderCore = () => {
        // available widgets
        const widgets = {
            "rs": <RoundSettings
                numSpies={this.state.numSpies}
                numPlayers={this.state.numPlayers}
                setNumSpies={(sign) => this.setNumSpies(sign)}
                setNumPlayers={val => this.setNumPlayers(val)}
                onSelectCatClick={this.switchToCat} 
            />,
            "cat": <CategoryTiles 
                ref={node => this.catTilesNode = node} 
                selectedCatIds={this.state.selectedCatIds}
            />,
            "playerTiles": <PlayerTiles
                players={this.state.players}
                onTilePress={(id) => this.onTilePress(id)}
                showPenalty={this.state.showPenalty}
                result={this.state.result}
            />
        }

        // Error handling
        if (typeof widgets[this.state.core] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "core": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        // return widget by state
        return widgets[this.state.core]
    }
    
    /************************************************************
     *                        Footer
     ************************************************************/
    _renderFooter = () => {
        // available widgets
        const widgets = {
            "landingNextBtn": <LandingNextBtn
                onPress={this.onLandingNextClick}
            />,
            "categoryControls": <CategoryControls
                onOkayPress={this.onConfirmCatClick}
                onCancelPress={this.onCancelCatClick}
            />,
            "playerTilesControls": <PlayerTilesControls
                onResetPress={() => {}}
                showGuess={this.state.showGuess}
                onGuessPress={this.onGuessPress}
            />,
            "guessControls": <GuessControls/>,
            "sharePenaltyControls": <SharePenaltyControls
                onPenaltyPress={this.onPenaltyPress}
            />,
            "continueControls": <ContinueControls
                onContinuePress={this.onContinuePress}
            />,
            "nothing": <View/>
        }

        // Error handling
        if (typeof widgets[this.state.footer] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "footer": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
            </Text>
        }

        // return widget by state
        return widgets[this.state.footer]
    }

    /************************************************************
     *                        Modal
     ************************************************************/
    _renderModalContent = () => {
        if (!this.state.modalVisible) {
            return
        }
        
        let widgets = {
            "nothing": <View/>,
        };

        if (this.state.modalPlayerId === null) {
            widgets = {
                ...widgets,
                "continueOrReset": <ContinueOrReset
                    onResetPress={() => {}}
                    onContinuePress={this.toNextRound}
                />        
            }
        } else {
            const player = this.state.players.filter(p => p.id === this.state.modalPlayerId)[0];
            widgets = {
                ...widgets,
                "wordThenPhoto": <WordThenPhoto
                    word={player && player.word}
                    photoPath={player && player.photoPath}
                    onPhotoPathRetrieved={uri => this.onPhotoTaken(uri)}
                    dismissModal={this.dismissModal}
                />,
                "keywordOrKill": <KeywordOrKill
                    dismissModal={this.dismissModal}
                    word={player && player.word}
                    onKillPress={this.onKillPress}
                    photoPath={player && player.photoPath}
                />,
                "continueOrReset": <ContinueOrReset
                    onResetPress={() => {}}
                    onContinuePress={this.toNextRound}
                />,
                "nextRoundWord": <NextRoundWord
                    word={player.word}
                    onWordSeenPress={this.onNextRoundWordSeenPress}
                />,
                "nothing": <View/>
            }
        }

        // Error handling
        if (typeof widgets[this.state.modalContent] === 'undefined') {
            return <Text style={{fontSize: 24}}>
                Plz provide a valid state for "modalContent": 
                enum({`${JSON.stringify(Object.keys(widgets))}`})
                for modalPlayerId is {this.state.modalPlayerId !== null && "not"} null
            </Text>
        }

        // return widget by state
        return widgets[this.state.modalContent]
    }

    dismissModal = () => {
        this.setState({
            modalVisible: false,
            modalPlayerId: null,
        })
    }

    /************************************************************
     *                        Handlers
     ************************************************************/
    switchToCat = () => {
        this.setState({ 
            core: "cat",
            footer: "categoryControls",
         })
    }

    onConfirmCatClick = () => {
        this.setState({
            core: "rs",            
            selectedCatIds: this.catTilesNode.getSelectedIds()
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    onCancelCatClick = () => {
        this.setState({
            core: "rs",
            footer: "landingNextBtn",
        }, () => {
            this.setState({
                footer: this.state.selectedCatIds.length !== 0
                    ? "landingNextBtn"
                    : "nothing",
            })
        })
    }

    setNumSpies = sign => {
        // TODO: Toast for invalid values
        this.setState({ numSpies: this.state.numSpies + parseInt(sign + 1) });
    }

    setNumPlayers = numPlayers => {
        this.setState({ numPlayers });
    }

    onLandingNextClick = () => {
        const { numPlayers, numSpies } = this.state;
        let players = Array(numPlayers).fill().map((_, i) => {
            return {
                role: 'c',
                id: i,
                name: `Player ${i + 1}`,
                word: `字字字${i}`,
                alive: true,
                photoPath: DEFAULT_AVATAR,
                wordSeen: false,
            }
        });

        while (players.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            players[spyIdx].role = 's';
        };

        this.setState({
            players,
        }, () => {
            this.setState({
                core: "playerTiles",
                footer: "playerTilesControls",
                modalContent: "wordThenPhoto"
            });
        });
    }

    onTilePress = id => {
        if (this.state.result.winner) {
            return;
        }

        this.setState({ 
            modalVisible: true,
            modalPlayerId: id,
        });
    }

    onPhotoTaken = uri => {
        const {
            players,
            modalPlayerId
        } = this.state;

        players[modalPlayerId] = {
            ...players[modalPlayerId],
            photoPath: { uri },
            wordSeen: true,            
        }

        const showGuess = players.every(p => p.wordSeen && p.photoPath !== DEFAULT_AVATAR);

        this.setState({
            players,
            showGuess,
        }, () => {
            this.dismissModal();
        })
    }

    onGuessPress = () => {
        this.setState({
            footer: "guessControls",
            modalContent: "keywordOrKill"
        })
    }

    onKillPress = () => {
        const {
            players,
            modalPlayerId
        } = this.state;

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
            this.setState({
                result : {
                    winner: 's',
                    aliveSpies,
                    aliveNorm
                },
                footer: "sharePenaltyControls",
            })
        } else if (normWin) {
            this.setState({
                result : {
                    winner: 'c',
                    aliveSpies,
                    aliveNorm
                },
                footer: "sharePenaltyControls",
            })
        } else {
            this.setState({
                result : {
                    aliveSpies,
                    aliveNorm
                }
            })
        }

        this.dismissModal();
    }

    onPenaltyPress = () => {
        this.setState({
            showPenalty: true,
            footer: "continueControls",
        })
    }

    onContinuePress = () => {
        this.setState({
            modalContent: "continueOrReset",
            modalVisible: true,
        })
    }

    toNextRound = () => {
        let {
            players,
            numSpies,
            numPlayers,
        } = this.state;

        players = players.map(p => {
            return {
                ...p,
                role: 'c',
                wordSeen: false,
                alive: true,
                word: `字字字Round${this.state.roundNum + 1}`
            }
        });

        while (players.filter(p => p.role === 's').length !== numSpies) {
            const spyIdx = getRandomInt(numPlayers);
            players[spyIdx].role = 's';
        };

        this.setState({
            players,
            roundNum: this.state.roundNum + 1,
        }, () => {
            this.setState({
                showGuess: false,
                showPenalty: false,
                result: {},
                footer: "playerTilesControls",
                modalContent: "nextRoundWord",
            })

            this.dismissModal();
        })
    }

    onNextRoundWordSeenPress = () => {
        const {
            players,
            modalPlayerId
        } = this.state;

        players[modalPlayerId] = {
            ...players[modalPlayerId],
            wordSeen: true,
        }

        const showGuess = players.every(p => p.wordSeen);

        this.setState({
            players,
            showGuess,
        }, () => {
            this.dismissModal();
        })
    }

    /************************************************************
     *                        Render
     ************************************************************/
    render() {
        return (
            <View style={styles.container}>
                <Header title={
                    JSON.stringify(this.state.result)
                } />

                <Core children={this._renderCore()} />                                    

                <Footer children={this._renderFooter()} />

                <DefaultModal
                    children={this._renderModalContent()}
                    modalVisible={this.state.modalVisible} 
                    onBackdropPress={this.dismissModal}                    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
    }
})

export default WhoIsSpy;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}