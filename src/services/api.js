import { API_KEY, API_URL } from "./config";

const getTopTracks = async () => {
    const response = await fetch(`${API_URL}tracks/top${API_KEY}`);
    return await response.json();
};



export {getTopTracks};