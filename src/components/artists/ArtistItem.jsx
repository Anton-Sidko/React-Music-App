import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {getArtistPhoto} from '../../services/api';
import {sideMenuBG} from '../../layout/assets';

function ArtistItem(props) {
    const {
        name,
        id
    } = props;

    const [artistPhoto, setArtistPhoto] = useState([]);
    const [imageURL, setImageURL] = useState(sideMenuBG);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getArtistPhoto(id).then(data => {
            if (data.images) {
                setArtistPhoto(data.images);
            }
            setLoading(false);
        })
    }, [id])

    useEffect(() => {
        if (!loading && artistPhoto.length > 0) {
            setImageURL(artistPhoto[0].url);
        }
    }, [artistPhoto, loading])



    return (
        <Link
            to={{
                pathname: `/artist-info/${name}`,
                propsArtist: props,
                imageURL: imageURL,
                id: id
            }}
            className="artist-item"
        >
            <div className="artist-img">
                <img src={imageURL} alt={name} />
            </div>
            <span className="artist-title">{name}</span>
        </Link>
    )
}

export default ArtistItem;

