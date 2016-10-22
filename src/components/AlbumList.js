// Import Libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    // initializing
    state = { albums: [] };

    // life cycle function - runs before first render (only at first??)
    componentWillMount() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums : response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;