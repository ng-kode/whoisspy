import React, { Component } from "react";
import { View, Text } from 'react-native';

const Header = ({ title, style }) => (
    <View style={style}>
        <Text>誰是臥底</Text>
        <Text>{title}</Text>
    </View>
);

export default Header;