import React, {useState, useEffect} from 'react';

import {getLikedTrack} from '../../../services/api';
import Spinner from '../../spinner/Spinner';
import List from '../../../components/chart/List';

function Like(props) {
    const [trackList, setTrackList] = useState([]);
    const [likedTrack, setLikedTrack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLikedTrack(props.likedTrack)
    }, [props.likedTrack])

    useEffect(() => {
        if (likedTrack.length > 0) {
            getLikedTrack(likedTrack.join(',')).then(data => {
                if (data.tracks) {
                    setTrackList(data.tracks);
                }
                setLoading(false);
            })
        } else {
            setTimeout(() =>{
                setLoading(false);
            }, 500)
        }
    }, [likedTrack])

    return (
        <div className="liked-page">
        {loading ? <Spinner /> : (
            trackList.length > 0 ? (
                <List itemList={trackList} {...props}></List>
            ) : (
                <h2>Nothing here. Add here your favourite tracks!</h2>
            )
        )}
        </div>
    )
}

export default Like;