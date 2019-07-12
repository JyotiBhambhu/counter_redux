import * as React from 'react';
import {View} from 'react-native';

export interface Props {

}

interface State {

}

class Home extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return(<View/>)
    }

}

export default Home;