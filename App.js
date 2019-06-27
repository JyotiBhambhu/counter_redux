/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {clear, decrement, increment, set} from "./redux/thunk/counter.thunk";
import {hello} from "./redux/thunk/hello.thunk";


type Props = {};

class App extends Component<Props> {

    render() {
        console.log(this.props);
        const {helloText, loading, btnPressed} = this.props.helloState;
        return (

            <View style={styles.verticalContainer}>
                <TextInput
                    style={styles.box}
                    onChangeText={this.onChangeText}
                    value={this.props.count.toString()}
                />
                <View style={styles.horizontalContainer}>
                    <Button title="+" onPress={this.props.counterIncrement}/>
                    <Text style={styles.text}>{this.props.count}</Text>
                    <Button title="-" onPress={this.props.counterDecrement}/>
                </View>
                <Button title="Clear" onPress={this.props.counterClear}/>
                <Text style={styles.text}>{helloText}</Text>
                <Text style={styles.text}>Did you presses the button: {btnPressed}</Text>
                <Button title="Show me some magic!" onPress={this.props.hello}/>
            </View>
        );
    }

    onChangeText = (number) => {
        if (!number) {
            number = 0;
        }
        const count = parseInt(number);
        // this.setState({count});
        this.props.counterSet(count);
    };
}

const styles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    horizontalContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
    },
    box: {
        borderWidth: 1
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

function mapStateToProps(state) {
    return {
        count: state.counter.count,
        helloState: state.hello
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({

    counterIncrement: () => dispatch(increment()),
    counterDecrement: () => dispatch(decrement()),
    counterClear: () => dispatch(clear()),
    counterSet: (params: string) => dispatch(set(params)),

    hello: () => dispatch(hello())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);


// export default connect(mapStateToProps, {counterIncrement, counterDecrement, counterClear, counterSet, helloBtnPressed})(App);
