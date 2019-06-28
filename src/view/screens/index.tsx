import {Navigation} from "react-native-navigation";
import {SCREENS} from "../../constants/screen";
import Splash from "./splash";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import Setting from "./settings";

/**
 * ToDo: recurryinhg function used here, need to explore more, why it is used
 *
 * @param redux
 */
const registerComponentWithRedux = (redux: any) => (
    name: string,
    component: any,
) => {
    Navigation.registerComponentWithRedux(
        name,
        () => component,
        redux.Provider,
        redux.store,
    );
};

// /**
//  *
//  * @param redux
//  * @param name
//  * @param component
//  */
// const registerCompWithRedux = (redux: any, name: string, component: any) => {
//     return Navigation.registerComponentWithRedux(
//         name,
//         () => component,
//         redux.Provider,
//         redux.store,
//     );
// };


export function registerScreens(redux: any) {
    console.log(redux);
    registerComponentWithRedux(redux)(SCREENS.Splash, Splash.default);
    registerComponentWithRedux(redux)(SCREENS.SignIn, SignIn.default);
    registerComponentWithRedux(redux)(SCREENS.SignUp, SignUp.default);
    registerComponentWithRedux(redux)(SCREENS.Home, Home.default);
    registerComponentWithRedux(redux)(SCREENS.Settings, Setting.default);
console.log('redux end');
}