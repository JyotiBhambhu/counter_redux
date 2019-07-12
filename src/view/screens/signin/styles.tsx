import {StyleSheet} from 'react-native';
import {TYPOGRAPHY} from "../../styles/typography";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: TYPOGRAPHY.COLOR.Default,
    },
    centerContainer: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    tText: {
        marginTop: 76,
        fontSize: 36,
        textAlign: 'center',
        color: TYPOGRAPHY.COLOR.log_txt_title,
    },
    inputBox1: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderTopWidth: 2,
        borderBottomWidth: 1,
        marginTop: 23,
    },
    inputBox2: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopWidth: 1,
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    inputBox: {
        borderColor: TYPOGRAPHY.COLOR.log_txt_border,
        backgroundColor: TYPOGRAPHY.COLOR.Default,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        color: TYPOGRAPHY.COLOR.log_txt_input,
        padding: 10,
    },
    btn: {
        width: 100,
        height: 100,
        alignSelf: 'stretch',
        fontSize: 16,
        color: TYPOGRAPHY.COLOR.Default,
    },
    txtUnableToLogin: {
        fontSize: 12,
        position: 'absolute',
        bottom: 0,
        margin: 12,
        color: TYPOGRAPHY.COLOR.log_txt_link,
    },
    txtVersion: {
        fontSize: 10,
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 2,
        right: 0,
    },


});

export default style;