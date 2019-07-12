import * as React from 'react';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TYPOGRAPHY} from "../../styles/typography";
import GradientView from '../../../native_comp/GradientView'

export interface Props {

}

interface State {

}

class SignIn extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    <Text style={styles.tText}>Login</Text>
                    <TextInput style={[styles.inputBox1, styles.inputBox]}
                               placeholder="User Name"
                               keyboardType={'email-address'}
                               placeholderTextColor={TYPOGRAPHY.COLOR.log_txt_input}/>
                    <TextInput style={[styles.inputBox2, styles.inputBox]}
                               password={true}
                               secureTextEntry={true}
                               placeholder="Password"
                               placeholderTextColor={TYPOGRAPHY.COLOR.log_txt_input}/>


                    {/*<TouchableOpacity  style={styles.btn}*/}
                    {/*    onPress={() => {*/}
                    {/*}}>*/}
                        <GradientView
                            style={styles.btn}
                            fromColor={TYPOGRAPHY.COLOR.btn_start}
                            toColor={TYPOGRAPHY.COLOR.btn_end}
                            cornerRadius={5.0}
                            text={"Login"}>
                        </GradientView>
                    {/*</TouchableOpacity>*/}

                </View>
                <Text style={styles.txtUnableToLogin}>Unable to Login?</Text>
                <Text style={styles.txtVersion}>version</Text>


            </View>
        )
    }
}

export default SignIn;