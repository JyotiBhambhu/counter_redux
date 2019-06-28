// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import {connect} from 'react-redux';
// import {counterClear, counterDecrement, counterIncrement, counterSet, helloBtnPressed} from "./redux/actions";
//
//
// type Props = {};
//
// class App extends Component<Props> {
//
//     render() {
//         console.log(this.props);
//         const { helloText, loading, btnPressed } = this.props.hello;
//         return (
//
//             <View style={styles.verticalContainer}>
//                 <TextInput
//                     style={styles.box}
//                     onChangeText={this.onChangeText}
//                     value={this.props.count.toString()}
//                 />
//                 <View style={styles.horizontalContainer}>
//                     <Button title="+" onPress={this.props.counterIncrement}/>
//                     <Text style={styles.text}>{this.props.count}</Text>
//                     <Button title="-" onPress={this.props.counterDecrement}/>
//                 </View>
//                 <Button title="Clear" onPress={this.props.counterClear}/>
//                 <Text style={styles.text}>{helloText}</Text>
//                 <Text style={styles.text}>Did you presses the button: {btnPressed.toString()}</Text>
//                 <Button title="Show me some magic!" onPress={this.props.helloBtnPressed}/>
//             </View>
//         );
//     }
//
//     onChangeText = (number) => {
//         if (!number) {
//             number = 0;
//         }
//         const count = parseInt(number);
//         // this.setState({count});
//         this.props.counterSet(count);
//     };
// }
//
// const styles = StyleSheet.create({
//     verticalContainer: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     horizontalContainer: {
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'row',
//         backgroundColor: '#F5FCFF',
//     },
//     box: {
//         borderWidth: 1
//     },
//     text: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     button: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
// });
//
// function mapStateToProps(state) {
//     return {
//         count: state.counter.count,
//         hello: state.hello
//     }
// }
//
//
// export default connect(mapStateToProps, {counterIncrement, counterDecrement, counterClear, counterSet, helloBtnPressed})(App);
