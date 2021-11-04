import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import {heartIcon, heartFillIcon, shareTrackIcon, leftArrowIcon} from '../../assets';
import './Player.sass';

function Player(props) {
    const {
        name = '',
        artistName = '',
        albumName = '',
        albumId = '',
        previewURL = '',
        id = '',
        handleLikedTrack = Function.prototype
    } = props.location.propsPlayer || [];

    const [isLiked, setIsLiked] = useState(props.location.isLiked);

    const isLikehanddle = () => {
        setIsLiked(!isLiked);
    };

    if (!props.location.propsPlayer) {
        return <Redirect to="/" />
    }

    return (
        <div className="player-wrap">
            <div className="album-img">
                <div
                    className="back-btn"
                    onClick = {() => props.history.goBack()}
                >
                    <img src={leftArrowIcon} alt="go previous page" />
                    <span>Back</span>
                </div>

                <img src={`http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/350x350.jpg`} alt={albumName} />

                <div className="icons-wrap">
                    <div className="share-track-wrap">
                        <img src={shareTrackIcon} alt="share track with friend" />
                    </div>
                    <div
                        className="btn-liked"
                        onClick={() => {
                            handleLikedTrack(id);
                            isLikehanddle()
                        }}
                    >
                        {isLiked ? (
                            <img src={heartFillIcon} alt="track is liked" />
                        ) : (
                            <img src={heartIcon} alt="track is not liked yet" />
                        )}
                    </div>
                </div>
            </div>

            <div className="track-info-wrap">
                <div className="track-info">
                    <p className="track-title">{name}</p>
                    <p>{artistName}</p>
                </div>
            </div>
            <audio controls className= "audio">
                <source src={previewURL} type="audio/mpeg"/>
            </audio>
        </div>
    )

}

export default Player;