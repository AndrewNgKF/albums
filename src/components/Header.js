//Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
//Make a function the same name as the file it is placed in
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    //single line no need (), if multiple line then use it.
    //Properties
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: '#F8F8F8',
        //Justify for top/down, Align for left/right.
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20
    }
};

//Make the component available to other parts of the app
export default Header;
