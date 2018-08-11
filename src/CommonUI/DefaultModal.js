import React from 'react';
import {Modal, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const DefaultModal = ({ 
    modalVisible, 
    onBackdropPress, 
    children, 
    backdropStyle,
    innerContainerStyles
}) => (
        <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => {}}
        >
            <TouchableWithoutFeedback onPress={onBackdropPress}>
                <View 
                    style={[styles.backdrop, backdropStyle]}
                >
                </View>
            </TouchableWithoutFeedback>

            <View style={[styles.innerContainer, innerContainerStyles]}>
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
        position: "absolute",
        zIndex: 10,
        alignSelf: "center",
        top: "25%",
        borderRadius: 10,
    }
})

export default DefaultModal;