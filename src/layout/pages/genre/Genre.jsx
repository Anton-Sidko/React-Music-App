import React, {useState, useEffect} from 'react';

import {getAllGenres} from '../../../services/api';
import Spinner from '../../spinner/Spinner';
import GenresList from '../../../components/genres/GenresList';

function Genre(props) {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllGenres().then(data => {
            if (data.genres) {
                setGenres(data.genres);
            }
            setLoading(false);
        })
    }, [])

    return (
        <>
            {loading ? <Spinner /> : (
                genres.length > 0 ? (
                    <GenresList itemList={genres} {...props}></GenresList>
                ) : (
                    <h2>Something wrong. Data was not loaded</h2>
                )
            )}
        </>
    )
}

export default Genre;

