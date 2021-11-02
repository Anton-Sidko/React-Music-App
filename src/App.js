import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import StatusBar from './layout/statusBar/StatusBar';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Like from './layout/pages/like/Like';
import Chart from './layout/pages/chart/Chart';
import Artist from './layout/pages/artist/Artist';
import Genre from './layout/pages/genre/Genre';
import Player from './layout/pages/player/Player';

function App() {
    return (
        <>
            <Router basename="/MusicApp">
                <StatusBar />
                <Header />
                <main className="content-wrap">
                    <Switch>
                        <Route path="/like" component={Like} />
                        <Route exact path="/" component={Chart} />
                        <Route path="/artist" component={Artist} />
                        <Route path="/genre" component={Genre} />
                        <Route path="/player" component={Player} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
