import * as React from 'react';
import {goToAuth, goToHome} from "../../../navigators/navigation";
import {SafeAreaView, View, Image, AsyncStorage} from 'react-native';
import styles from './styles';
import {BUTTON_DEFAULT} from "../../elements/buttons";
import {USER_KEY} from "../../../config";

export interface Props {

}

interface State {

}

class Splash extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        try {
            const user = AsyncStorage.getItem(USER_KEY);
            console.log('user: ', user);
            if (user) {
                goToHome();
            } else {
                goToAuth();
            }
        } catch (e) {
            console.log('error: ', e);
            goToAuth();
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../../assets/images/rnn2.png')}
                    />
                    <Image
                        resizeMode='center'
                        source={require('../../assets/images/rn_ts.png')}
                    />
                    <BUTTON_DEFAULT
                        title="Continue To App"
                        onClick={goToHome}
                    />
                </View>
            </SafeAreaView>
        )
    }

}

export default Splash;