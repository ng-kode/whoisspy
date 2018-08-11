import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DefaultModal } from "../CommonUI";

const PlayerModal = ({ modalVisible, onBackdropPress }) => (
    <DefaultModal modalVisible={modalVisible} onBackdropPress={onBackdropPress}>
        <Text>Hello Player</Text>
    </DefaultModal>
);

export default PlayerModal;