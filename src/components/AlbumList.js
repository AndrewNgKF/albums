import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
//Functional Componenet
// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List!!</Text>
//         </View>
//     );
// };

//Class Component
class AlbumList extends Component {
    //Initial State
    state = { albums: [] };

    //Lifecycle Method
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //then update state when download is complete
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //Javascript reference in between JSX must be wrapped in {} e.g album.title
        return this.state.albums.map(album =>
            //Key must be unique. Guaranteed across re-renders. Best is record ID.
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
//Classes do not require ending semi-colon;

export default AlbumList;
