//Index.ios.js - place code here for IOS

//Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'; //no need .js if its a .js file
import AlbumList from './src/components/AlbumList';
//import destructuring


// Create  a component, which is a javascript component that returns some JSX
//One component per file
const App = () => (
    <View style={{ flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );

// Render to device
//Register at least 1 application
AppRegistry.registerComponent('albums', () => App);
