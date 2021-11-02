import {Link, Redirect} from 'react-router-dom';

import './Player.sass';

function Player(props) {
    if (!props.location.propsPlayer) return <Redirect to="/" />;
    const {
        name,
        artistName,
        albumName,
        albumId,
        previewURL
    } = props.location.propsPlayer;

    return (
        <>
            <div className="album-img">
                <img src={`http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/150x150.jpg`} alt={albumName} />
            </div>

            <div className="track-info-wrap">
                <div className="track-info">
                    <p>{name}</p>
                    <p>{albumName}</p>
                    <p>{artistName}</p>
                </div>
            </div>
            <audio controls className= "audio">
                <source src={previewURL} type="audio/mpeg"/>
            </audio>
            <Link to="/">Back</Link>
        </>

    )
}

export default Player;