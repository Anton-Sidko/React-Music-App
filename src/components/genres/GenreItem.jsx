import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {getPlaylistByGenre} from '../../services/api';
import {sideMenuBG} from '../../layout/assets';

function GenreItem(props) {
    const {
        name,
        id
    } = props;

    const [playlistPreview, setPlaylistPreview] = useState([]);
    const [imageURL, setImageURL] = useState(sideMenuBG);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlaylistByGenre(id).then(data => {
            if (data.playlists) {
                setPlaylistPreview(data.playlists);
            }
            setLoading(false);
        })
    }, [id])

    useEffect(() => {
        if (!loading && playlistPreview.length > 0) {
            setImageURL(playlistPreview[0].images[0].url);
        }
    }, [playlistPreview, loading])

    const path = name.replace(/\//, '_');

    return (
        <Link
            to={{
                pathname: `/genre-info/${path}`,
                propsGenre: props,
                imageURL: imageURL,
                id: id
            }}
            className="genre-item"
        >
            <div className="genre-img">
                <img src={imageURL} alt={name} />
            </div>
            <span className="genre-title">{name}</span>
        </Link>
    )
}

export default GenreItem;

