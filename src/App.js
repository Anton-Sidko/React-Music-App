import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import StatusBar from './layout/statusBar/StatusBar';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Like from './layout/pages/like/Like';
import Chart from './layout/pages/chart/Chart';
import Artist from './layout/pages/artist/Artist';
import Genre from './layout/pages/genre/Genre';
import Player from './layout/pages/player/Player';
import ArtistInfo from './layout/pages/artist/ArtistInfo';
import GenreInfo from './layout/pages/genre/GenreInfo';

function App() {
    const [likedTrack, setLikedTrack] = useState([]);

    useEffect(() => {
        const liked = localStorage.getItem('likedTrack');
        if (liked) {
            setLikedTrack(liked.split(','));
        }
    }, [])

    const handleLikedTrack = (id) => {
        let liked = likedTrack;
        if (likedTrack.includes(`${id}`)) {
            liked.splice(likedTrack.indexOf(`${id}`), 1);
        } else {
            liked.push(id);
        }
        setLikedTrack(liked);
        localStorage.setItem('likedTrack', liked.join(','));
    };

    return (
        <>
            <Router basename="/React-Music-App">
                <StatusBar />
                <Header />
                <main className="content-wrap">
                    <Switch>
                        <Route
                            path="/like"
                            render={
                                props => <Like {...props}
                                        handleLikedTrack={handleLikedTrack}
                                        likedTrack={likedTrack}
                                />}
                        />
                        <Route
                            exact path="/"
                            render={
                                props => <Chart {...props}
                                        handleLikedTrack={handleLikedTrack}
                                        likedTrack={likedTrack}
                                />}
                        />
                        <Route
                            path="/artist"
                            render={
                                props => <Artist {...props}
                            />}
                        />
                        <Route
                            path="/genre"
                            render={
                                props => <Genre {...props}
                            />}
                        />
                        <Route path="/player" component={Player} />
                        <Route
                            path="/artist-info"
                            render={
                                props => <ArtistInfo {...props}
                                handleLikedTrack={handleLikedTrack}
                                likedTrack={likedTrack}
                            />}
                        />
                        <Route
                            path="/genre-info"
                            render={
                                props => <GenreInfo {...props}
                                handleLikedTrack={handleLikedTrack}
                                likedTrack={likedTrack}
                            />}
                        />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
