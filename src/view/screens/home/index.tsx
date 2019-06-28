import {connect} from 'react-redux';
import Component from "./Component";


/**
 * state value returned from reducers
 * will be use in component
 */
const mapStateToProps = (state: any) => {

};

/**
 * When user take an action like when user click on a button,
 * will call action variable,
 * actions dispatched from here will call reducers
 */
const mapDispatchToProps = () => {

};

const homeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default homeContainer;