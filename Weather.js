import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ['#373B44', '#4286f4'],
        title: "Thunderstorm in the house",
        subTitle:"Actually, ouside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Drizzle",
        subTitle:"IS like rain, but gay"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Rainy",
        subTitle:"For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Cold as balls",
        subTitle:"Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ['#89F7FE', '#66A6FF'],
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#FF7300','#FEF253'],
        title: "Sunny",
        subTitle:"Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subTitle:"I know, fucking boring"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Haze",
        subTitle:"Just don't go outside."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ['#4da0b0', '#D39D38'],
        title: "Mist!",
        subTitle:"It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ['#4DA0B0', '#D39D38'],
        title: "Dusty",
        subTitle:"Thanks a lot China ㅋ"
    }
};
export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName || "weather-sunset"}
                    size={96}
                    color="white" />
                <Text style={styles.tex}>{temp}º</Text>
            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    tex: {
        fontSize: 42,
        color:"white"
    },
    title: {
        fontSize: 44,
        color: "white",
        fontWeight: "300",
        marginBottom:10
    },
    subTitle: {
        fontSize: 24,
        color: "white",
        fontWeight:"600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
});