import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";


export default function Weather({temp}) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor:"#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize : 30
    }
});