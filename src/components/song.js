import React, {Component} from 'react';
import '../styles.css'


class Song extends Component {
    render(){
        const {name, artist, album} = this.props;
    

        return (
            <div className='songs'>
                <p><span>Nombre:</span> {name}</p>
                <p><span>Artista:</span> {artist}</p>
                <p><span>Album:</span> {album}</p>
            </div>
        )
    }
}

export default Song;