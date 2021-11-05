import { API_KEY, API_URL } from "./config";

const getTopTracks = async () => {
    const response = await fetch(`${API_URL}tracks/top${API_KEY}`);
    return await response.json();
};

const getArtistTopTracks = async (id) => {
    const response = await fetch(`${API_URL}artists/${id}/tracks/top${API_KEY}&limit=10`);
    return await response.json();
};

const getTopArtists = async () => {
    const response = await fetch(`${API_URL}artists/top${API_KEY}`);
    return await response.json();
};

const getArtistPhoto = async (id) => {
    const response = await fetch(`${API_URL}artists/${id}/images${API_KEY}`);
    return await response.json();
};

const getArtistInfo = async (id) => {
    const response = await fetch(`${API_URL}artists/${id}${API_KEY}`);
    return await response.json();
};

const getGenresById = async (id) => {
    const response = await fetch(`${API_URL}genres/${id}${API_KEY}`);
    return await response.json();
};



const getLikedTrack = async (trackList) => {
    const response = await fetch(`${API_URL}tracks/${trackList}${API_KEY}`);
    return await response.json();
};



export {
    getTopTracks,
    getLikedTrack,
    getTopArtists,
    getArtistPhoto,
    getArtistInfo,
    getGenresById,
    getArtistTopTracks
};