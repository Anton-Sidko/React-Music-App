import React, {useState, useEffect} from 'react';

import {getTopArtists} from '../../../services/api';
import Spinner from '../../spinner/Spinner';
import ArtistList from '../../../components/artists/ArtistList';

function Artist(props) {
    const [topArtist, setTopArtist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopArtists().then(data => {
            if (data.artists) {
                setTopArtist(data.artists);
            }
            setLoading(false);
        })
    }, [])

    return (
        <>
            {loading ? <Spinner /> : (
                topArtist.length > 0 ? (
                    <ArtistList itemList={topArtist} {...props}></ArtistList>
                ) : (
                    <h2>Something wrong. Data was not loaded</h2>
                )
            )}
        </>
    )
}

export default Artist;