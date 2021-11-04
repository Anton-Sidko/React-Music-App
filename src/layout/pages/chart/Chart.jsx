import React, {useState, useEffect} from 'react';

import {getTopTracks} from '../../../services/api';
import Spinner from '../../spinner/Spinner';
import List from '../../../components/chart/List';

function Chart(props) {
    const [topTrack, setTopTrack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopTracks().then(data => {
            if (data.tracks) {
                setTopTrack(data.tracks);
            }
            setLoading(false);
        })
    }, [])

    return (
        <>
        {loading ? <Spinner /> : (
            topTrack.length > 0 ? (
                <List itemList={topTrack} {...props}></List>
            ) : (
                <h2>Something wrong. Data was not loaded</h2>
            )
        )}
        </>
    )
}

export default Chart;