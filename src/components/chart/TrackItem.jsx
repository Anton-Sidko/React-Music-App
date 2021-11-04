import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {playIcon, heartIcon, heartFillIcon} from '../../layout/assets';
import './TrackItem.sass';

function TrackItem(props) {
    const {
        name,
        artistName,
        albumName,
        albumId,
        id,
        handleLikedTrack = Function.prototype,
        likedTrack = []
    } = props;

    const [isLiked, setIsLiked] = useState(false);

    const isLikehanddle = () => {
        setIsLiked(!isLiked);
    };
    useEffect(() => {
        if (likedTrack.includes(`${id}`)) {
            setIsLiked(true)
        }
    }, [id, likedTrack])

    return (
        <div className="chart-item">
            <div className="album-img">
                <img src={`http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/150x150.jpg`} alt={albumName} />
            </div>

            <div className="track-info-wrap">
                <div className="track-info">
                    <p className="track-title">{name}</p>
                    <p>{artistName}</p>
                </div>
                <div className="track-action">
                    <Link
                        to={{
                            pathname: `/player/${name}`,
                            propsPlayer: props,
                            isLiked: isLiked
                        }}
                    >
                        <img src={playIcon} alt="play track" />
                    </Link>
                    <div
                        className="btn-liked"
                        onClick={() => {
                            handleLikedTrack(id)
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
        </div>
    )
}

export default TrackItem;

