import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {getTopTrackByGenre} from '../../../services/api';
import List from '../../../components/chart/List';
import {leftArrowIcon} from '../../assets';

function GenreInfo(props) {
    const location = useLocation();
    const genreName = location.pathname.split('/')[2];

    const [loading, setLoading] = useState(true);
    const [genreTopTrack, setGenreTopTrack] = useState([]);

    let {
        name,
        description,
        id
    } = props.location.propsGenre || [];

    let imageURL = '';
    if (props.location.imageURL) {
        imageURL = props.location.imageURL;
    }

    if (!localStorage.getItem(`${genreName}-info`)) {
        localStorage.setItem(`${genreName}-info`, `${name}DVDR${description}DVDR${id}DVDR${imageURL}`);
    }
    const genreInfo = localStorage.getItem(`${genreName}-info`).split('DVDR');


    useEffect(() => {
        getTopTrackByGenre(id).then(data => {
            if (data.tracks) {
                setGenreTopTrack(data.tracks);
                setLoading(false);
            }
        })
    }, [id])

    if (!props.location.propsGenre) {
        name = genreInfo[0];
        description = genreInfo[1];
        id = genreInfo[2];
        imageURL = genreInfo[3];
    }

    return (
        <div className="genre-wrap">
            <div className="genre-img">
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

            {description.length > 0 ? (
                <div
                    dangerouslySetInnerHTML={{__html: `${description}`}}
                    className="genre-descr"
                >
                </div>
                ) : null
            }

            {loading ? null : (
                genreTopTrack.length > 0 ? (
                    <div className="genre-top-track">
                        <h2>Top track</h2>
                        <List itemList={genreTopTrack} {...props}></List>
                    </div>
                ) : (
                    <h2>Something wrong. Data was not loaded</h2>
                )
            )}
        </div>
    )
}

export default GenreInfo;