import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class tradeCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                {/*<Image
                    source={this.props.trade.image}
                    style={styles.tradeImage}
        ></Image>*/}

                <View style={styles.titleContainer}>
                    <Text style={styles.tradeTitleText}>
                        {this.props.trade.title}
                    </Text>
                    <Text style={styles.tradeAuthorText}>
                        {this.props.trade.author}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {this.props.trade.description}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    tradeImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    tradeTitleText: {
        fontSize: RFValue(25),
        color: "white"
    },
    tradeAuthorText: {
        fontSize: RFValue(18),
        color: "white"
    },
    descriptionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
});
