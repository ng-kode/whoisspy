import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Modal from "react-native-modal";

const DefaultModal = ({ 
    modalVisible, 
    onBackdropPress, 
    children,
}) => (
        <Modal 
            isVisible={modalVisible} 
            onBackdropPress={onBackdropPress}
        >
            <View style={styles.innerContainer}>
                {children}
            </View>
        </Modal>
    );
  
const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        flex: 1,
    },
    innerContainer: {
        height: "50%",
        width: "80%",
        backgroundColor: "white",
        // position: "absolute",
        // zIndex: 10,
        // alignSelf: "center",
        // top: "25%",
        borderRadius: 10,
    }
})

export default DefaultModal;