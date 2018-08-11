import React from 'react';
import { View, StyleSheet } from 'react-native';

const Core = ({ body }) => (
    <View style={styles.container}>
        {body}
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        flex: 4.8,
        width: "100%",
    },
})

export default Core;