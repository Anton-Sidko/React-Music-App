import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {getGenresById, getArtistTopTracks} from '../../../services/api';
import List from '../../../components/chart/List';
import {leftArrowIcon} from '../../assets';
import './ArtistInfo.sass';

function ArtistInfo(props) {
    const location = useLocation();
    const artistName = location.pathname.split('/')[2];

    const [artistGenres, setArtistGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [artistTopTrack, setArtistTopTrack] = useState([]);

    let {
        name,
        blurbs,
        id
    } = props.location.propsArtist || [];

    let genresId = '';
    let imageURL = '';
    if (props.location.imageURL) {
        imageURL = props.location.imageURL;
    }

    if (props.location.propsArtist) {
        genresId = props.location.propsArtist.links.genres.ids.join(',');
    }

    if (!localStorage.getItem(`${artistName}-info`)) {
        localStorage.setItem(`${artistName}-info`, `${name}DVDR${blurbs}DVDR${id}DVDR${genresId}DVDR${imageURL}`);
    }
    const artistInfo = localStorage.getItem(`${artistName}-info`).split('DVDR');


    useEffect(() => {
        getArtistTopTracks(id).then(data => {
            if (data.tracks) {
                setArtistTopTrack(data.tracks);
            }
        })
    }, [id])

    useEffect(() => {
        getGenresById(genresId).then(data => {
            if (data.genres) {
                setArtistGenres(data.genres);
            }
            setLoading(false);
        })
    }, [genresId])

    if (!props.location.propsArtist) {
        name = artistInfo[0];
        blurbs = artistInfo[1];
        id = artistInfo[2];
        genresId = artistInfo[3];
        imageURL = artistInfo[4];
    }

    return (
        <div className="artist-wrap">
            <div className="artist-img">
                <div
                    className="back-btn"
                    onClick = {() => props.history.goBack()}
                >
                    <img src={leftArrowIcon} alt="go previous page" />
                    <span>Back</span>
                </div>

                <img src={imageURL} alt={name} />
                <span className="artist-title">{name}</span>
            </div>

            {blurbs.length > 0 ? (
                <div className="artist-blurbs">{blurbs}</div>
                ) : null
            }

            {loading ? null : (
                artistTopTrack.length > 0 ? (
                    <div className="artist-top-track">
                        <h2>Top track</h2>
                        <List itemList={artistTopTrack} {...props}></List>
                    </div>
                ) : (
                    <h2>Something wrong. Data was not loaded</h2>
                )
            )}

            {loading ? null : (
                <div className="artist-genre-list">
                    <h2>{name} genres</h2>
                    {artistGenres.map(el => (
                        <div key={el.id} className="genre">
                            <h3 className="artist-genre-title">{el.name}</h3>
                            <div
                                dangerouslySetInnerHTML={{__html: `${el.description}`}}
                                className="artist-genre-descr"
                            >
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default ArtistInfo;