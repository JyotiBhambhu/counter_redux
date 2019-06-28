import {Navigation} from "react-native-navigation";
import {SCREENS} from "../../constants/screen";
import * as Splash from "./splash";
import * as SignIn from "./signin";
import * as SignUp from "./signup";
import * as Home from "./home";
import * as Setting from "./settings";

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
    console.warn(redux);
    registerComponentWithRedux(redux)(SCREENS.Splash, Splash.default);
    registerComponentWithRedux(redux)(SCREENS.SignIn, SignIn.default);
    registerComponentWithRedux(redux)(SCREENS.SignUp, SignUp.default);
    registerComponentWithRedux(redux)(SCREENS.Home, Home.default);
    registerComponentWithRedux(redux)(SCREENS.Settings, Setting.default);
    console.warn('redux end');
}

// export function registerScreens() {
//     Navigation.registerComponent(SCREENS.Splash, () => Splash.default);
//     Navigation.registerComponent(SCREENS.SignIn, () => SignIn.default);
//     Navigation.registerComponent(SCREENS.SignUp, () => SignUp.default);
//     Navigation.registerComponent(SCREENS.Home, () => Home.default);
//     Navigation.registerComponent(SCREENS.Settings, () => Setting.default);
// }