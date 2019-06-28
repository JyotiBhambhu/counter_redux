import {Navigation} from "react-native-navigation";
import {showSplash} from "./navigation";
import {registerScreens} from "../view/screens";
import {Provider} from 'react-redux';
import store from '../../redux/store'

registerScreens({store, Provider});

const app = () => {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions({
            topBar: {visible: true},
        });
        showSplash();
    });
};

export default app;