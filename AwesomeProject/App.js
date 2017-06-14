import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true}

        setInterval(() => {
            this.setState(allState => {
                return {showText: !allState.showText};
            })
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class Greeting extends React.Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}


export default class HelloWorldApp extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Greeting name='Vinh'/>
                <Blink text='I love to abc'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
